import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2022 McNicols 
        {/* <Image
          src="/../public/logo.png"
          alt="McNicols"
          width="65px"
          height="30px"
        /> */}
         Guitars All Rights Reserved ™ ® & Copyright ©
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
