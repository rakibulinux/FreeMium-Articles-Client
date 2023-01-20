import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import whiteScreen from "../../../Assets/white-screen.png";
import BlackScreen from "../../../Assets/Black-screen-tp.png";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { MdAmpStories } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import "./Navebar.css";
//
const Navbar = () => {
  const { user, logoutUserAccount } = useContext(AuthContext);
  const handleLogOut = () => {
    logoutUserAccount()
      .then(() => {
        toast.success("User logout Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const writeIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Write"
    >
      <path
        d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
        fill="currentColor"
      ></path>
      <path
        d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
        stroke="currentColor"
      ></path>
    </svg>
  );

  const navItemNotUser = (
    <>
      <li>
        <NavLink to="/ourstory" className="text-gray-900 border-animate">
          Our story
        </NavLink>
      </li>

      <li>
        <NavLink className="text-gray-900 border-animate" to="/membership">
          Membership
        </NavLink>
      </li>
      <li className=" gap-2">
        <NavLink
          className="flex gap-2 text-gray-900 hover:text-black"
          to="/write-stories"
        >
          {writeIcon} Write
        </NavLink>
      </li>

      <li>
        <NavLink className="text-gray-900 border-animate" to="/login">
          Sign In
        </NavLink>
      </li>
    </>
  );
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-sky-600" : "")}
          to="/"
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
    <div className="container mx-auto print:hidden">
      {user?.uid ? (
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown sm:block md:hidden">
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
            <div className="flex gap-2">
              <NavLink to="/" className="text-2xl font-medium">
                <img className="w-56" src={whiteScreen} alt="" />
              </NavLink>
              <form className="hidden md:block">
                <div className="relative mt-4 text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="py-2 text-sm text-gray-900 border rounded-3xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                    placeholder="Search Freemium"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="navbar-end">
            <NavLink
              className="flex gap-2 text-gray-900 hover:text-black"
              to="/write-stories"
            >
              {writeIcon} Write
            </NavLink>
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
                <span className="badge badge-xs badge-primary indicator-item">
                  1
                </span>
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    className="w-4"
                    src={user?.photoURL}
                    alt="profile pictures"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-sm bg-base-100 box-border w-max
                border-[1px] border-[#e4e0e0]
                "
              >
                <li className="justify-between bg-white text-black text-lg font-semibold text-semibold">

                  <NavLink to="/profile">

                    <CgProfile className="text-lg" />
                    Profile
                  </NavLink>
                </li>
                <li className="justify-between bg-white text-black text-lg font-semibold text-semibold">

                  <NavLink
                    to="/list"
                  >
                    <BsBookmarksFill className="text-lg" />

                    List
                  </NavLink>
                </li>
                <li className="justify-between bg-white text-black text-lg font-semibold text-semibold">
                  <NavLink to="/stories">
                    <MdAmpStories className="text-lg" />
                    Stories
                  </NavLink>
                </li>
                <li className="justify-between bg-white text-black text-lg font-semibold text-semibold">
                  <NavLink to="/stats">
                    <GiNetworkBars className="text-lg" />
                    Stats
                  </NavLink>
                </li>

                <div className="divider"></div>
                <li className="">
                  <NavLink
                    to="/settings"
                  >


                    Settings
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/refinerecommendations"
                  >

                    Refine recommendations
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/"
                  >

                    Manage publications
                  </NavLink>
                </li>
                <div className="divider"></div>
                <li className="">
                  <NavLink
                    to="/">
                    Become a member
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/applyToThePartnerProgram">
                    Apply to the Partner Program
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/">
                    Gift membership

                  </NavLink>
                </li>
                <div className="divider"></div>
                <li className="justify-between bg-white text-black text-lg font-semibold">
                  <>

                    <button
                      onClick={handleLogOut}
                      className="text-red-500 hover:text-red-600"
                    >
                      <AiOutlineLogout className="text-lg" /> Sign out

                    </button>
                  </>
                </li >
              </ul >
            </div >
          </div >
        </div >
      ) : (
        <div className="navbar justify-between items-center">
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
              <img className="w-44" src={whiteScreen} alt="" />
            </NavLink>
          </div>
          <div className="flex items-center gap-7">
            <div className="hidden lg:flex">
              <ul className="flex items-center gap-7">{navItemNotUser}</ul>
            </div>
            <NavLink
              to="/login"
              className="bg-black py-2 px-3 text-gray-100 rounded-3xl"
            >
              Get started
            </NavLink>
          </div>
        </div>
      )}
    </div >
  );
};

export default Navbar;
