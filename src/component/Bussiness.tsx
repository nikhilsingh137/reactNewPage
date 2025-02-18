import React, { useEffect } from "react";
import Style from "../style/bussiness.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Bussiness = () => {
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
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.divide}>
          <div className={Style.image} data-aos="flip-left">
            <img
              src="https://www.shutterstock.com/image-photo/digital-marketing-commerce-online-sale-600nw-2269149669.jpg"
              alt=""
            />
          </div>
          <div className={Style.content} data-aos="fade-left">
            <h2>
              Get your business in front of{" "}
              <span>
                local customers.<i></i>
              </span>
            </h2>
            <p>
              Maximize your opportunities for shoppers to find you by
              advertising with this website.
            </p>
            <a href="/contact">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
