import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I had the privilege of working with Anteneh as a UI/UX designer and backend developer for our web application project, and I must say that the experience was outstanding.Anteneh seamlessly combined their expertise in both UI/UX design and backend development to deliver exceptional results.",
    },
    {
      img: profilePic2,
      review:
        "I had the privilege of working with Anteneh as a UI/UX designer for our website project, and I am incredibly impressed with the results. Anteneh went above and beyond to deliver a truly exceptional user experience.",
    },
    {
      img: profilePic3,
      review:
        "I had the pleasure of working with Anteneh as a UI/UX designer and I cannot express enough how satisfied I am with the outcome. Anteneh consistently delivered exceptional work and exceeded all our expectations.",
    },
    {
      img: profilePic4,
      review:
        "I had the pleasure of working with Anteneh as a UI/UX designer for our company's website redesign project, and I must say that the experience was exceptional. Anteneh brought a high level of expertise, creativity, and professionalism to the table.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper>
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
