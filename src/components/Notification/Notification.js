import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { AuthContext } from "../../contexts/AuthProvider";
import { fetchUserData } from "../../store/fetchGetSlice";
import { fetchAsync } from "../../store/fetchSlice";
const socket = io(`${process.env.REACT_APP_API_URL}`); // Replace with your server URL
const redux = "start";
const Notification = () => {
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([]);
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    refetch,
    data: singleUsers,
  } = useQuery(["user", user?.email], () =>
    dispatch(
      fetchUserData(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
    )
  );
  // const selector = useSelector((state) => state.fetch.data);
  // useEffect(() => {
  //   fetchAsync(`${process.env.REACT_APP_API_URL}/user/${user?.email}`);
  //   console.log(selector);
  // }, [selector, user]);
  useEffect(() => {
    // Fetch all notifications
    axios
      .get(`${process.env.REACT_APP_API_URL}/notifications/${singleUsers?._id}`)
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Listen for new notifications
    socket.on("new_notification", (newNotification) => {
      setNotifications([...notifications, newNotification]);
    });

    // Listen for notification updates
    socket.on("notification_updated", (updatedNotification) => {
      const updatedIndex = notifications.findIndex(
        (notification) => notification._id === updatedNotification._id
      );
      if (updatedIndex !== -1) {
        const newNotifications = [...notifications];
        newNotifications[updatedIndex] = updatedNotification;
        setNotifications(newNotifications);
      }
    });

    return () => {
      socket.off("new_notification");
      socket.off("notification_updated");
    };
  }, [notifications]);

  const handleReadClick = (notification) => {
    // Update notification as read
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/notifications/${notification._id}`,
        { read: true }
      )
      .then((response) => {
        const updatedNotification = response.data;
        const updatedIndex = notifications.findIndex(
          (notification) => notification._id === updatedNotification._id
        );
        if (updatedIndex !== -1) {
          const newNotifications = [...notifications];
          newNotifications[updatedIndex] = updatedNotification;
          setNotifications(newNotifications);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreateClick = () => {
    const newNotification = {
      message: "New notification",
      read: false,
    };

    // Create new notification
    axios
      .post(`${process.env.REACT_APP_API_URL}/notifications`, newNotification)
      .then((response) => {
        const createdNotification = response.data;
        setNotifications([...notifications, createdNotification]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleCreateClick}>Create Notification</button>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification._id}
            onClick={() => handleReadClick(notification)}
          >
            {notification?.message} ({notification?.read ? "read" : "unread"})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
