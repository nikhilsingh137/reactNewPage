import React from "react";
import Style from "../style/bussiness.module.scss";

const Bussiness = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.divide}>
          <div className={Style.image}>
            <img
              src="https://www.shutterstock.com/image-photo/digital-marketing-commerce-online-sale-600nw-2269149669.jpg"
              alt=""
            />
          </div>
          <div className={Style.content}>
            <h2>
              Get your business in front of <span>local customers.</span>
            </h2>
            <p>
              Maximize your opportunities for shoppers to find you by
              advertising with Yellowpages.
            </p>
            <a href="#/">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
