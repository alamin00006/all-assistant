import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaMobileAlt, FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-white">
        <div className="w-1/2">
          <Link>
            <img className="w-28" src={logo} alt="" />
          </Link>

          <p>
            All Assistant Limited is a leading home service company in
            Bangladesh which is working for democratizing digital lifestyle
            across the country
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <div className="flex">
            <FaRegAddressCard></FaRegAddressCard>
            <p className="ml-2">
              Momtaz Complex 3rd Floor, Patanish Bazar, Hajigonj, Chandpur
            </p>
          </div>

          <div className="flex">
            <AiOutlineMail></AiOutlineMail>
            <p className="ml-2">allassistant7@gmail.com</p>
          </div>

          <div className="flex">
            <FaMobileAlt></FaMobileAlt>

            <p className="ml-2">01646516565</p>
          </div>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className="bg-black text-white flex justify-center">
        <p>© 2023, All Rights Reserved By All Assistant Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;

// allassistant7@gmail.com
// Momtaz Complex 3rd Floor, Patanish Bazar, Hajigonj, Chandpur
