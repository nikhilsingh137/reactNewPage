import React from "react";
import Style from "../style/aboutbanner.module.scss";

const AboutBanner = () => {
  return (
    <div className={Style.banner}>
      <div className={Style.wrapper}>
        <div className={Style.title}>
          <h2>Let's Do Business, the Easy Way.</h2>
          <p>
            Our mission is to <b>'make doing business easy'</b> and democratize
            business opportunities for all!
          </p>
        </div>
      </div>
      <div className={Style.Image}>
        <img
          src="https://corporate.indiamart.com/wp-content/themes/indiamart-child/images/about/industries-banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutBanner;
