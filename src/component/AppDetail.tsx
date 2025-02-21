import React, { useEffect } from "react";
import Style from "../style/appdetail.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const AppDetail = () => {
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
        <div className={Style.Image} data-aos="zoom-in">
          <img
            src="https://bizbookdirectorytemplate.com/images/mobile.png"
            alt=""
          />
        </div>
        <div className={Style.content} data-aos="zoom-out">
          <h2>Looking for the Best Service Provider? Get the App!</h2>
          <ul>
            <li>HOM-APP-TITFind nearby listings</li>
            <li>Easy service enquiry</li>
            <li>Listing reviews and ratings</li>
            <li>Manage your listing, enquiry and reviews</li>
          </ul>
          <span>
            We'll send you a link, to you below provided email id & open it on
            your smart phone to download the app
          </span>
          <div className={Style.appImage}>
            <a href="#/">
              <img
                src="https://bizbookdirectorytemplate.com/images/gstore.png"
                alt=""
              />
            </a>
            <a href="#/">
              <img
                src="	https://bizbookdirectorytemplate.com/images/gstore.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
