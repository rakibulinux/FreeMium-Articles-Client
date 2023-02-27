import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { APIContext } from "../contexts/APIProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MessageLayout = () => {
  const { isDarkMode } = useContext(APIContext);
  return (
    <div
      className={
        isDarkMode ? "bg-black-350 text-white" : "bg-base-100 text-black-350"
      }
    >
      <div
        className={
          isDarkMode
            ? "w-11/12 mx-auto bg-black-350 text-white"
            : "w-11/12 mx-auto bg-base-100 text-black-350"
        }
      >
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MessageLayout;
