import React from "react";
import { Link, Outlet } from "react-router-dom";

const Technician = () => {
  return (
    <div>
      <div className="drawer drawer-mobile w-4/5 m-0 mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <div className="rounded-full w-12 h-12 bg-lime-600 p-2">
            <Link className=" text-white " to="/cart">
              Cart
            </Link>
          </div>

          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side border-solid border-2 border-sky-500">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="ricecooker">Rice Cooker Service</Link>
            </li>
            <li>
              <Link to="microwave">Microwave Oven Service</Link>
            </li>
            <li>
              <Link to="computerservice">Computer Service</Link>
            </li>
            <li>
              <Link to="electricalservice">Electrical Service</Link>
            </li>
            <li>
              <Link to="treadmillrepair">Treadmill Repair</Link>
            </li>
            <li>
              <Link to="waterpumprepair">Water Pump Repair</Link>
            </li>
            <li>
              <Link to="acrepair">AC Repair</Link>
            </li>
            <li>
              <Link to="waterheaterrepair">Water Heater Repair</Link>
            </li>
            <li>
              <Link to="cccamera">CC Camera Installation</Link>
            </li>
            <li>
              <Link to="fridgerepair">Fridge Repair</Link>
            </li>
            <li>
              <Link to="ipsservice">IPS Service</Link>
            </li>
            <li>
              <Link to="gasstoveservice">Gas Stove Service</Link>
            </li>
            <li>
              <Link to="plumbingservice">Plumbing Service</Link>
            </li>
            <li>
              <Link to="geyserservice">Geyser Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technician;
