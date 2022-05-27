import React from "react";
import "./Footer.css";
import Wave from "../../img/wavegray.png";
import Insta from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>chathura.manoharas@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/chathura-manohara-679b331a4/?fbclid=IwAR1bJdN0BzRHkB-o5dtLRpoT7lYtchkhwJT3e9nk72cku2BctrA1znDSS3s"><Insta  color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/chathura.manohara.99/"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/Chathura99"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
