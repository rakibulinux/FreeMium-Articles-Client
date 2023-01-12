import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logoutUserAccount } = useContext(AuthContext);
  const handleLogOut = () => {
    logoutUserAccount()
      .then(() => {
        toast.success("LogOut Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const navItemNotUser = (
    <>
      <li>
        <NavLink>Our story</NavLink>
      </li>

      <li>
        <NavLink>Membership</NavLink>
      </li>
      <li>
        <NavLink>Write</NavLink>
      </li>

      <li>
        <NavLink to="/login">Sign In</NavLink>
      </li>
    </>
  );
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-sky-600" : "")}
          to="/home"
        >
          Home
        </NavLink>
      </li>

      {!user?.uid ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-sky-600" : "")}
              to="/login"
            >
              <PrimaryButton classes="rounded-full px-2 py-1">
                Login
              </PrimaryButton>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-sky-600" : "")}
              to="/register"
            >
              <PrimaryButton classes="rounded-full px-2 py-1">
                Register
              </PrimaryButton>
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-sky-600 bg-none hover:bg-none" : ""
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>SignOut</button>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="container mx-auto">
      {user?.uid ? (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <NavLink to="/" className="text-2xl font-medium">
              FreeMium
            </NavLink>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
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
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="profile pictures" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-sm bg-base-100 box-border"
              >
                <li className="">
                  <NavLink
                    to="/profile"
                    className="justify-between bg-white text-black"
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className="justify-between bg-white text-black">
                    Settings
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className="justify-between bg-white text-black">
                    <button onClick={handleLogOut}>Logout</button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar justify-between bg-base-100">
          <div className="">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
              >
                {navItemNotUser}
              </ul>
            </div>
            <NavLink to="/" className="text-2xl font-medium">
              FreeMium
            </NavLink>
          </div>
          <div className="gap-7">
            <div className="hidden lg:flex">
              <ul className="flex gap-7">{navItemNotUser}</ul>
            </div>
            <NavLink
              to="/login"
              className="bg-black py-2 px-3 text-white rounded-3xl"
            >
              Get started
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
