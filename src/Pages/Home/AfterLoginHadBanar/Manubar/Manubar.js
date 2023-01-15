import React from "react";
import { Link } from "react-router-dom";

const Manubar = () => {
  return (
    <div style={{ width: "100%" }}>
      <ul
        className="menu menu-vertical lg:menu-horizontal bg-base-100 border my-8"
        style={{ width: "100%", alignItems: "center" }}
      >
        <li>
          <Link to="/">Programing</Link>
        </li>
        <li>
          <Link to="/">React.js</Link>
        </li>
        <li>
          <Link to="/">Node.js</Link>
        </li>
        <li>
          <Link to="/">Traveling</Link>
        </li>
        <li>
          <Link to="/">Javascript</Link>
        </li>
        <li>
          <Link to="/">UX Design</Link>
        </li>
      </ul>
    </div>
  );
};

export default Manubar;
