import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo-original.png";
import useUser from "../../Hooks/userUser";

const Navbar = () => {
  const [user, refetch, isLoading] = useUser();

  const navigate = useNavigate();

  const SingOutHandle = () => {
    navigate("/");
    localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <header className="bg-green-300 sticky top-0 z-50">
      <nav className="lg:mx-36 md:mx-26 sm:mx-16 xs:mx-0">
        <div className="navbar  text-black">
          <div className="navbar-start">
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="" className="px-3">
                    HOME
                  </Link>
                </li>
                <li tabIndex={1}>
                  <Link to="" className="px-3">
                    CART
                  </Link>
                </li>
                <li>
                  {user?.email ? (
                    <Link onClick={SingOutHandle} to="">
                      LOGOUT
                    </Link>
                  ) : (
                    <Link to="/login" className="px-3">
                      LOGIN
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <Link to="/">
              <img
                src={logo1}
                className="btn btn-ghost normal-case text-lg "
                alt=""
              />
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
              <Link onClick={SingOutHandle} to="">
                LOGOUT
              </Link>
            ) : (
              <Link to="/login" className="px-3">
                LOGIN
              </Link>
            )}
          </div>
          <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
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
