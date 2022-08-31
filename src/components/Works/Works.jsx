import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>My</span>
          <span>Technologies</span>
          <spane>
            <b>Web development</b><br />
            HTML, CSS, JavaScript, SpringMVC, Springboot, ReactJS, Bootstrap,
            jQuery, Ajax, NodeJS,
            <br /><br />
            <b>Programming languages</b><br /> Java, JavaScript, Dart, C/C++, Scala, PHP
            <br /><br />
            <b>Mobile app development</b><br /> Flutter, React Native
            <br /><br />
            <b>Framework</b><br /> Spring, Flutter, React Native
            <br /><br />
            <b>Database</b><br /> MySQL, Firebase
            <br /><br />
            <b>Design</b><br /> FIgma, Adobe Photoshop, Illustrator
            <br /><br />
            <b>Other</b><br /> Linux, Git, Trello, Heroku
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 10.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
              alt=""
            />
          </div>
          <div className="w-secCircle">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt=""
            />
          </div>{" "}
          <div className="w-secCircle">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt=""
            />
          </div>
          <div className="w-secCircle">
            <img
              src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
              alt=""
            />
          </div>
          <div className="w-secCircle">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt=""
            />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
