import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Cal from "../../img/Cal_mobile.jpeg";
import Todolist from "../../img/todolist.jpg";
import Chathura from "../../img/mysite.png";
import { themeContext } from "../../Context";
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
          <p><a href="#">The-branded-shop</a> <br/>E-commerce Web Application</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={""} alt="" />
          <p> <a href="https://sasnaka.org/#/" target="_blank" >Sasnaka Volunteer Platform</a><br/> React web application </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cal} alt="" />
          <p><a href="#">Simple Calculator</a> <br/>React-native mobile app </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Todolist} alt="" />
          <p><a href="https://plan-your-date.herokuapp.com/" target="_blank" >Plan-Your-Date</a> <br/> Web Application</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={""} alt="" />
          <p><a href="#" target="_blank" >Employee Data  <br/>Management System</a> <br/> Web Application</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={""} alt="" />
          <p><a href="https://tic-tac-toe-play.herokuapp.com/" target="_blank" >Play-TicTacToe</a> <br/> Game </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={""} alt="" />
          <p><a href="#" target="_blank" >Apartment Resource Management System</a> <br/> Web Application</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Chathura} alt="" />
          <p><a href="https://chathura-itsme.herokuapp.com/" target="_blank" >Myportfolio - Chathura</a> <br/> Web Application</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
