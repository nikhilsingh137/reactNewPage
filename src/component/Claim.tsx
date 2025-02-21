import React, { useEffect } from "react";
import Style from "../style/claim.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Claim = () => {
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
        <div className={Style.content}>
          <div className={Style.Image} data-aos="fade-right">
            <img
              src="https://i4.ypcdn.com/ypu/images/home/claim.png?a0b7a33"
              alt=""
            />
          </div>
          <div className={Style.mainbox} data-aos="fade-left">
            <div className={Style.text}>
              <h2>
                Manage your <span>free </span>listing.
              </h2>
              <p>
                Update your business information in a few steps. Make it easy
                for your customers to find you on this website.
              </p>
              <h3>
                <span>New!</span> Post a job opening on your free listing.
              </h3>
              <a href="#/">Claim Your Listing</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;
