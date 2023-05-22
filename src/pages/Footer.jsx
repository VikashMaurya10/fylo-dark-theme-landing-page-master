import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

import logo from "../assets/images/logo.svg";
import locationImg from "../assets/images/icon-location.svg";
import phoneImg from "../assets/images/icon-phone.svg";
import emailImg from "../assets/images/icon-email.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="innerFooter setWidth">
        <img className="logo" src={logo} alt="logo" />
        <div className="innerFooter__content d-f jc-sb">
          <div className="innerFooter__content__left d-f">
            <div className="location d-f gap">
              <img src={locationImg} alt="location Icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="call d-f fd-c gap">
              <div className="d-f ai-c gap">
                <img src={phoneImg} alt="phone icon" />
                <p>+1-543-123-4567</p>
              </div>
              <div className="d-f ai-c gap">
                <img src={emailImg} alt="phone icon" />
                <p>example@fylo.com</p>
              </div>
            </div>
          </div>
          <div className="innerFooter__content__right d-f gap">
            <div className="links d-f jc-sb gap">
              <div className="links">
                <NavLink className="link">About Us</NavLink>
                <NavLink className="link">Jobs</NavLink>
                <NavLink className="link">Press</NavLink>
                <NavLink className="link">Blog</NavLink>
              </div>
              <div className="links">
                <NavLink className="link">Contact Us</NavLink>
                <NavLink className="link">Terms</NavLink>
                <NavLink className="link">Privacy</NavLink>
              </div>
            </div>
            <div className="share_icon d-f">
              <span>
                <AiOutlineTwitter />
              </span>
              <span>
                <GrFacebookOption />
              </span>
              <span>
                <AiOutlineInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/VikashMaurya10/VikashMaurya10"
          target="_blank"
        >
          Vikash Maurya
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
