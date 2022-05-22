import React from "react";
import "./Footer.css";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaMobileAlt,
  FaAngleRight,
} from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="app__footer flex__center section__padding">
      <div className="app__footer-conatiner-wrapper flex__center">
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Covid-Track</h3>
          <div className="app__footer-container-underline"></div>
          <p className="p__normal">
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="app__footer-socialIcons-container">
            <span className="footer-socialIcons flex__center">
              <FaFacebookSquare />
            </span>
            <span className="footer-socialIcons flex__center">
              <FaInstagram />
            </span>
            <span className="footer-socialIcons flex__center">
              <FaTwitterSquare />
            </span>
            <span className="footer-socialIcons flex__center">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Quick links</h3>
          <div className="app__footer-container-underline"></div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Home</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Dashboard</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Survey</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Register</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Login</p>
          </div>
        </div>
        <div className="app__footer-container find-us">
          <h3 className="app__footer-container-heading">Find us</h3>
          <div className="app__footer-container-underline"></div>
          <div className="app__footer-container-findus-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <BiCurrentLocation />
            </span>
            <p className="p__normal">Symbiosis</p>
          </div>
          <div className="app__footer-container-findus-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaMobileAlt />
            </span>
            <p className="p__normal">+91 1234567890</p>
          </div>
          <div className="app__footer-container-findus-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <GrMail />
            </span>
            <p className="p__normal">yourmail@domain.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
