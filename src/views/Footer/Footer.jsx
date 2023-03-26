import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaMobileAlt, FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <footer className="footer p-10 ">
        <div className="w-1/2 md:ml-32 lg:ml:32">
          <Link>
            <img className="w-28" src={logo} alt="" />
          </Link>

          <p>
            Palkitopsolution Limited is a leading home service company in
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
            <p className="ml-2">palkitopsolution23@gmail.com</p>
          </div>

          <div className="flex">
            <FaMobileAlt></FaMobileAlt>

            <p className="ml-2">01406799844</p>
          </div>
        </div>
        <div className="mr-20">
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className=" flex justify-center">
        <p>© 2023, All Rights Reserved By Namir Creative BD Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;

// allassistant7@gmail.com
// Momtaz Complex 3rd Floor, Patanish Bazar, Hajigonj, Chandpur
