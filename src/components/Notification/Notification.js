import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

const Notification = () => {
  const [userId, setUserId] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(`${process.env.REACT_APP_API_URL}`, {
      query: { userId },
    });
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("notification", (notification) => {
      console.log(
        `New notification: ${notification.title} - ${notification.message}`
      );
      setNotifications([...notifications, notification]);
    });
    return () => socket.disconnect();
  }, [userId, notifications]);

  return (
    <div>
      <input
        placeholder="Enter your user id"
        onChange={(e) => setUserId(e.target.value)}
      />
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification.title} - {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
