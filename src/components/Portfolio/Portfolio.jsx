import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Cal from "../../img/Cal_mobile.jpeg";
import Todolist from "../../img/todolist.jpg";
import Chathura from "../../img/mysite.png";
import LMS from "../../img/lms.png";
import ALSS from "../../img/alss.png";
import TTT from "../../img/tictactoe.png"
import EMP from "../../img/empmanagement.png"
import MobileTodo from "../../img/mobiletodo.png"

import { themeContext } from "../../Context";
import Arrow from "@iconscout/react-unicons/icons/uil-arrow-circle-right";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={""} alt="" />
          <p><a href="#">The-branded-shop</a> <br/>E-commerce Web Application</p><a href="https://github.com/Chathura99/" target="_blank"><Arrow/></a>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={""} alt="" />
          <p> <a href="https://sasnaka.org/#/" target="_blank" >Sasnaka Volunteer Platform</a><br/> React web application (3rd Year)</p><a href="https://github.com/Chathura99/" target="_blank"><Arrow/></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Cal} alt="" />
          <p><a href="#">Simple Calculator</a> <br/>React-native mobile app </p><a href="https://github.com/Chathura99/Simple_Calculator" target="_blank"><Arrow/></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Todolist} alt="" />
          <p><a href="https://plan-your-date.herokuapp.com/" target="_blank" >Plan-Your-Date</a> <br/> Web Application</p><a href="https://github.com/Chathura99/todolist" target="_blank"><Arrow/></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={EMP} alt="" />
          <p><a href="https://manage-my-employees.herokuapp.com/employees" target="_blank" >Employee Data  <br/>Management System</a> <br/> Web Application</p><a href="https://github.com/Chathura99/React_springboot_employee_management" target="_blank"><Arrow/></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={LMS} alt="" />
          <p><a href="#" target="_blank" >Learning Management System</a> <br/> Web Application (Ongoing)</p><a href="https://github.com/akilaanjanadissanayaka/LMS_Frontend" target="_blank"><Arrow/></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={TTT} alt="" />
          <p><a href="https://tic-tac-toe-play.herokuapp.com/" target="_blank" >Play-TicTacToe</a> <br/> Game </p><a href="https://github.com/Chathura99/Tic-Tac-Toe_Game" target="_blank"><Arrow/></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={ALSS} alt="" />
          <p><a href="#" target="_blank" >Apartment Resource Management System</a> <br/> Web Application (2nd Year)</p><a href="https://github.com/Roni-Boiz/Y2GP_ALSS" target="_blank"><Arrow/></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={MobileTodo} alt="" />
          <p><a href="#" target="_blank" >Task Manager</a> <br/> Mobile Application</p><a href="https://github.com/Chathura99/ToDo-mobile-app" target="_blank"><Arrow/></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={""} alt="" />
          <p><a href="" target="_blank" >Ruwan Saloon</a> <br/> Web Application </p><a href="https://github.com/Chathura99/Ruwan_Saloon " target="_blank"><Arrow/></a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Chathura} alt="" />
          <p><a href="https://chathura-itsme.herokuapp.com/" target="_blank" >Myportfolio - Chathura</a> <br/> Web Application</p><a href="https://github.com/Chathura99/Chathura_Itsme" target="_blank"><Arrow/></a>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
