import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>This is a Login</h2>
      <h2>
        <Link to="/signup">Create New Account</Link>
      </h2>
    </div>
  );
};

export default Login;
