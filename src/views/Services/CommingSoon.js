import React from "react";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen gap-5">
      <h1 className="bg-rose-500 p-5 text-center text-white rounded font-bold">
        Comming Soon
      </h1>
      <Link to="/">
        <h1 className="bg-black p-5 text-center text-white rounded font-bold">
          Back To Home Page
        </h1>
      </Link>
    </div>
  );
};

export default CommingSoon;
