import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Notification from "./Notification";

const socket = io(`${process.env.REACT_APP_API_URL}`); // Replace with your server URL

const NotificationIcon = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Listen for new notifications
    socket.on("new_notification", (newNotification) => {
      setUnreadCount((count) => count + 1);
    });

    // Listen for notification updates
    socket.on("notification_updated", (updatedNotification) => {
      if (!updatedNotification.read) {
        setUnreadCount((count) => count + 1);
      } else {
        setUnreadCount((count) => count - 1);
      }
    });

    return () => {
      socket.off("new_notification");
      socket.off("notification_updated");
    };
  }, []);

  const handleDropdownClick = () => {
    setIsDropdownOpen((isOpen) => !isOpen);
  };

  return (
    <div>
      <div onClick={handleDropdownClick}>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs text-white badge-primary indicator-item">
              {/* {notifications?.length} */}1
            </span>
          </div>
        </button>
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
      </div>
      {isDropdownOpen && (
        <div className="dropdown">
          <Notification />
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;
