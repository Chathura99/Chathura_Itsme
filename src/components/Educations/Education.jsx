import React from "react";
import "./Education.css";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
//images
import profilePic1 from "../../img/primary.jfif";
import profilePic2 from "../../img/Maliyadeva.png";
import profilePic3 from "../../img/ucsc.png";

const Education = () => {
  const places = [
    {
      img: profilePic3,
      review:
        "University of Colombo School of Computing (2020 - 2024)",
    },
    {
      img: profilePic2,
      review:
        "Maliyadeva College (2010 - 2018)",
    },
    {
      img: profilePic1,
      review:
        "St/Bernedett's Model School (2006 - 2010)",
    },
    
    // {
    //   img: profilePic4,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
  ];

  return (
    <div className="t-wrapper" id="edu">
      <div className="t-heading">
        <span>Education </span>
        <span> </span>
        <span>...</span>
      <div className="blur t-blur1" style={{ background: "#ABF1FF94" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules dependancy
        modules={[Pagination]}
        slidesPerView={1}
        //swipe dots
        pagination={{ clickable: true }}
      >
        {places.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="edu">
                <img src={client.img} alt=""/>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Education;
