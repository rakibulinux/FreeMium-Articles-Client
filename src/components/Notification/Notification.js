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

  // const {
  //   isLoading,
  //   refetch,
  //   data: singleUsers,
  // } = useQuery(["user", user?.email], () =>
  //   dispatch(
  //     fetchUserData(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
  //   )
  // );
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

  // const handleCreateClick = () => {
  //   const newNotification = {
  //     message: "New notification",
  //     read: false,
  //   };

  //   // Create new notification
  //   axios
  //     .post(`${process.env.REACT_APP_API_URL}/notifications`, newNotification)
  //     .then((response) => {
  //       const createdNotification = response.data;
  //       setNotifications([...notifications, createdNotification]);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <div
      className="absolute right-0 mt-2 mr-4 bg-white rounded-md shadow-lg overflow-hidden z-20"
      style={{ width: "20rem" }}
    >
      <div className="p-2">
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
              href="#"
              class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />
              <p class="text-gray-600 text-sm mx-2">
                <span class="font-bold" href="#">
                  Jane Doe
                </span>{" "}
                {notification?.message} (
                {notification?.read ? "read" : "unread"})
                <span class="font-bold text-blue-500" href="#">
                  artical . 1h
                </span>{" "}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to="/notifications"
        className="block bg-gray-800 text-white text-center font-bold py-2"
      >
        See all notifications
      </Link>
    </div>
  );
};

export default Notification;
