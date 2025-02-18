import React from "react";
import Style from "../style/aboutmission.module.scss";

const AboutMission = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.Image}>
          <img
            src="https://tiimg.tistatic.com/new_website1/design2022/ti-about/about3.jpg"
            alt=""
          />
        </div>
        <div className={Style.content}>
          <h2>Our Mission and Vision</h2>
          <h3>Let’s enable 63 million+ SMEs to go digital</h3>
          <p className={Style.paragraph}>
            With technology and innovation as enablers, we endeavour to help our
            users reinvent businesses to compete and win, with digitization at
            the core. We also pride ourselves to be the only marketplace
            offering 360° digital marketing solutions to MSMEs to help them be
            tech-enabled.
          </p>
          <p className={Style.paragraph1}>
            With a robust pan- India as well as a global presence in 10+
            countries, we also assist global buyers to locate Indian suppliers,
            manufacturers, and exporters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
