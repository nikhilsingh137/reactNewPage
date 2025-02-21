import React from "react";
import Style from "../style/Aboutonline.module.scss";

const AboutOnline = () => {
  return (
    <div className={Style.conatiner}>
      <div className={Style.wrapper}>
        <div className={Style.title}>
          <h2>How to get Business Online?</h2>
          <i></i>
        </div>
        <div className={Style.content}>
          <div className={Style.video}>
            <iframe
              src="https://www.youtube.com/embed/HwjhTNRc3sM?si=g4e10bnxofFAHa5s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className={Style.video}>
            <iframe
              src="https://www.youtube.com/embed/spNd2QolvV8?si=qF9irscETJgI62XZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={Style.mainbox}>
          <p>
            A patient ear for client’s requirements and a constant effort to
            bring about those changes in the business arena has gained us a huge
            clientele across the globe. We have lived up to the expectations of
            our huge client base till now and intend to be a reliable source for
            them in the near future as well by embarking upon new arenas of
            business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOnline;
