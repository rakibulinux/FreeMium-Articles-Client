import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div
    // className="flex flex-col h-screen"
    >
      <Navbar />
      {/* <div className="flex-grow"> */}
      <Outlet />
      {/* </div> */}
      
    </div>
  );
};

export default Main;
