import React from "react";
import Style from "../style/banner.module.scss";

const Banner = () => {
  return (
    <div className={Style.Banner}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.Image}>
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_bills_2024.webp"
              alt=""
            />
          </div>
          <div className={Style.mainbox}>
            <a href="#/">
              <img
                src="https://img.lovepik.com/photo/50086/2966.jpg_wh860.jpg"
                alt=""
              />
            </a>
            <a href="#/">
              <img
                src="https://www.mromagazine.com/wp-content/uploads/2021/08/AdobeStock_263924753-1024x726.jpeg"
                alt=""
              />
            </a>
            <a href="#/">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/004/575/893/small/real-estate-concept-buying-real-estate-for-business-or-life-photo.jpg"
                alt=""
              />
            </a>
            <a href="#/">
              <img
                src="https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE="
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
