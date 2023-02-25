import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { APIContext } from "../contexts/APIProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const { isDarkMode } = useContext(APIContext);
  return (
    <div
      className={
        isDarkMode
          ? "w-11/12 md:w-11/12 lg:w-11/12 xl:w-10/12 mx-auto bg-black-350 text-white"
          : "w-11/12 md:w-11/12 lg:w-11/12 xl:w-10/12 mx-auto bg-base-100 text-black-350"
      }
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
