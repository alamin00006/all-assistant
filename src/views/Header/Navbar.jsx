import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo-original.png";
import useUser from "../../Hooks/userUser";
import "./Navbar.css";

const Navbar = () => {
  const [user, refetch] = useUser();

  useEffect(() => {
    if (!user?.email) refetch();
  }, [user, refetch]);

  return (
    <header className="all-assistant-navbar sticky top-0 z-50">
      <nav className="lg:mx-36 md:mx-26 sm:mx-16 xs:mx-0">
        <div className="navbar  text-black">
          <div className="navbar-start">
            <Link to="/" className="flex items-center">
              <img
                src={logo1}
                className=" lg:w-16 md:w-20 sm:w-14 xs:w-14 h-16 "
                alt=""
              />
              <span className="text-white mb-2 all-assistant-text">
                All assistant
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <input
              style={{ width: "400px", height: "40px" }}
              className="rounded pl-3"
              type="text"
              placeholder="Search your finding"
            />
          </div>
          <div className="navbar-end text-white">
            <Link to="" className="px-3 hidden lg:flex">
              HOME
            </Link>
            <Link to="" className="px-3 hidden lg:flex">
              CART
            </Link>
            {user?.email ? (
              <Link to="/dashboard">PROFILE</Link>
            ) : (
              <Link to="/login" className="px-3">
                LOGIN
              </Link>
            )}
          </div>
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
