import React, { useContext } from "react";
import "./Intro.css";
//images
import Vector1 from "../../img/Vector1.png";
import Vector3 from "../../img/Vector3.png";
import me1 from "../../img/me1.png";
import programmer from "../../img/programmer.png";
import se from "../../img/se.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Fb from "../../img/facebook.png";
//components
import FloatinDiv from "../FloatingDiv/FloatingDiv";
//other dependencies
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Chathura Manohara</span>
          <span>
            3rd year undergraduate at University of Colombo School of
            Computing... <br></br>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a
            href="https://www.linkedin.com/in/chathura-manohara-679b331a4/?fbclid=IwAR1bJdN0BzRHkB-o5dtLRpoT7lYtchkhwJT3e9nk72cku2BctrA1znDSS3s"
            target="_blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://github.com/Chathura99" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.facebook.com/chathura.manohara.99/"
            target="_blank"
          >
            <img src={Fb} alt="fb" />
          </a>
        </div>
      </div>

      {/* right side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector3} alt="" />
        <img src={me1} alt="" width={200} />
        {/* animation */}
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv
            img={programmer}
            text1="BSc(Hons)"
            text2="Software Engineering"
          />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={se} text1="UCSC" text2="17th" />
        </motion.div>

        <div className="blur" style={{ background: "#ABF1FF94" }}></div>
        <div
          className="blur"
          style={{
            background: "#ABF1FF94",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
