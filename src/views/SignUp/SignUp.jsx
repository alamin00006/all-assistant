import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUser from "../../Hooks/userUser";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [user, refetch, isLoading] = useUser();
  const token = localStorage.getItem("token");
  const [name, setName] = useState();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passWordError: "",
  });

  const navigate = useNavigate();

  const emailCheck = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, emailError: "" });
    } else {
      setError({ ...error, emailError: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const passwordCheck = (e) => {
    const passwordRegex = /.{6,}/;

    const validPassWord = passwordRegex.test(e.target.value);
    if (validPassWord) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setError({ ...error, passWordError: "" });
    } else {
      setError({ ...error, passWordError: "Invalid Password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const confirmPasswordCheck = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setError({ ...error, passWordError: "" });
    } else {
      setError({ ...error, passWordError: "dont Match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://all-assistant-server.onrender.com/api/v1/user/signup", {
        name: name,
        email: userInfo?.email,
        password: userInfo?.password,
      })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        return toast.warn(error.response.data.message);
      });
  };
  useEffect(() => {
    if (!user?.email) {
      refetch();
    } else {
      navigate("/");
    }
  }, [refetch, token, user, isLoading, navigate]);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <div className="flex justify-center">
          <h2 className="text-center text-xl text-white bg-login-info p-5 font-bold rounded-lg">
            Already have a Account? Please Login
            <br />
            No have you Account? Please Register
          </h2>
        </div>
        <div className="flex justify-center">
          <div>
            <form onSubmit={handleSubmit} className="login-form">
              <div>
                <div className="flex justify-between mb-8 items-center">
                  <Link
                    className="text-white px-10 py-2 rounded text-xl bg-black"
                    to="/login"
                  >
                    Login
                  </Link>
                  <h3>
                    <Link
                      className="text-white px-10 py-2 rounded text-xl bg-black"
                      to="/singUp"
                    >
                      Register
                    </Link>
                  </h3>
                </div>

                <label htmlFor="name">Full Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="block border-2 pl-2"
                  placeholder="Enter Your Name"
                  type="text"
                  name="name"
                  id="email"
                  required
                />
                <br />
                <label className="" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={emailCheck}
                  className="block border-2 pl-2 mt-2"
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
                {error?.emailError && (
                  <p className="text-rose-500">{error.emailError}</p>
                )}

                <label className="mt-2" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={passwordCheck}
                  className="block border-2 pl-2 mt-2"
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  id="password"
                  required
                />
                {error?.passWordError && (
                  <p className="text-rose-500">{error.passWordError}</p>
                )}
                <label className="mt-2" htmlFor="password">
                  Confirm Password
                </label>
                <input
                  onChange={confirmPasswordCheck}
                  className="block border-2 pl-2 mt-2"
                  type="password"
                  placeholder="Enter Your Password"
                  name="confirmPassword"
                  id="password"
                  required
                />
                <p></p>
                <input
                  className="bg-rose-500 text-white text-xl rounded border-0 py-2 mt-2 fs-5 cursor-pointer"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer className="toast-position" position="top-center" />
    </div>
  );
};

export default SignUp;
