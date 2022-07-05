import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 McNicols Guitars All Rights Reserved ™ ® & Copyright® </p>
      <p className="icons">
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  );
};

export default Footer;
