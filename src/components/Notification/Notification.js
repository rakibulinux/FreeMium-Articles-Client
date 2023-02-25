import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../../contexts/AuthProvider";
import { fetchUserData } from "../../store/fetchGetSlice";
import { fetchAsync } from "../../store/fetchSlice";
const socket = io(`${process.env.REACT_APP_API_URL}`); // Replace with your server URL

const Notification = () => {
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([]);
  const { user } = useContext(AuthContext);

  const singleUsers = useSelector((state) => state.fetch.data);
  const isLoading = useSelector((state) => state.fetch.isLoading);
  const error = useSelector((state) => state.fetch.error);

  useEffect(() => {
    dispatch(
      fetchAsync(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
    );
  }, [dispatch, user]);

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
  }, [notifications, singleUsers]);

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
  console.log(notifications);

  return (
    <div
      className="absolute right-0 mt-2 mr-4 bg-white rounded-md shadow-lg overflow-hidden p-2 z-20"
      style={{ width: "20rem" }}
    >
      <ul className="p-2">
        {notifications.map((notification) => (
          // <li
          //   className="my-2"
          //   key={notification._id}
          //   onClick={() => handleReadClick(notification)}
          // >
          //   {notification?.message} (
          //   {notification?.read ? "read" : "unread"})
          // </li>
          <li
            key={notification._id}
            onClick={() => handleReadClick(notification)}
            className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
          >
            <img
              className="h-8 w-8 rounded-full object-cover mx-1"
              src={singleUsers?.picture}
              alt="avatar"
            />
            <p className="text-gray-600 text-sm mx-2">
              <span className="font-bold" href="#">
                {singleUsers?.name}
              </span>{" "}
              {notification?.message} ({notification?.read ? "read" : "unread"})
              <span className="font-bold text-blue-500" href="#">
                artical . 1h
              </span>{" "}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
