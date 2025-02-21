import React from "react";
import Style from "../style/banner.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  AOS.init({
    offset: 100,
    duration: 1200,
    easing: "ease-in-out",
    delay: 200,
  });
  return (
    <div className={Style.Banner}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.Image} data-aos="fade-up">
            <img
              src="https://s3b.cashify.in/gpro/uploads/2022/05/31112701/How-To-Pay-Electricity-Bill-Online_.jpg"
              alt=""
            />
          </div>
          <div className={Style.mainbox}>
            <a href="#/" data-aos="fade-down">
              <img
                src="https://img.lovepik.com/photo/50086/2966.jpg_wh860.jpg"
                alt=""
              />
            </a>
            <a href="#/" data-aos="zoom-in">
              <img
                src="https://www.mromagazine.com/wp-content/uploads/2021/08/AdobeStock_263924753-1024x726.jpeg"
                alt=""
              />
            </a>
            <a href="#/" data-aos="zoom-out">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/004/575/893/small/real-estate-concept-buying-real-estate-for-business-or-life-photo.jpg"
                alt=""
              />
            </a>
            <a href="#/" data-aos="slide-down">
              <img
                src="https://smarttek.solutions/wp-content/uploads/artificial-in-healthcare.jpeg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
