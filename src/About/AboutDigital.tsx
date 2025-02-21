import React from "react";
import Style from "../style/aboutdigital.module.scss";

const AboutDigital = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <h2>
            Making Indian MSMEs <span>Digitally</span> <strong>Saksham</strong>
          </h2>
          <p className={Style.paragraph}>
            We are one of{" "}
            <b>India’s largest and oldest B2B e-commerce platforms </b>
            that connects buyers and suppliers to create a customer-driven value
            chain for all businesses, including SMEs, large enterprises, and
            individuals.
          </p>
          <p className={Style.paragraph1}>
            We integrate businesses into global value chains by bringing them
            together from across the world, on a single platform to interact and
            conduct the business smoothly, securely, and effectively.
          </p>
        </div>
        <div className={Style.Image}>
          <img
            src="https://corporate.indiamart.com/wp-content/uploads/2024/09/life-at-indiamart.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDigital;
