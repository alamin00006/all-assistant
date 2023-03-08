import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUser from "../../Hooks/userUser";
import axios from "axios";
import Loading from "../Loading/Loading";

const Login = () => {
  const [user, refetch, isLoading] = useUser();

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passWordError: "",
  });

  const emailCheck = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, emailError: "" });
    } else {
      setError({ ...error, emailError: " Please Valid Email" });
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
      setError({ ...error, passWordError: "Please Provide Valid Password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        "https://all-assistant-server.onrender.com/api/v1/user/login",
        {
          email: userInfo?.email,
          password: userInfo?.password,
        }
      );
      localStorage.setItem("token", data?.data?.data?.token);
      navigate("/");
    } catch (error) {
      return toast.warn(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (!user?.email) {
      refetch();
    } else {
      navigate("/");
    }
  }, [refetch, token, user, isLoading, navigate]);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-white">
      <div className="">
        <div className="">
          <div className=" flex justify-center">
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

                <label className="mt-2" htmlFor="email">
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
                <br />
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
                {/* <div className="d-flex justify-end">
                  <Link
                    to="/reset-password"
                    className="text-rose-500 forgot-password py-1"
                  >
                    Forget Password
                  </Link>
                </div> */}
                <input
                  className="bg-rose-500 text-xl text-white rounded border-0 py-2 mt-2 cursor-pointer"
                  type="submit"
                  value="Login"
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

export default Login;
