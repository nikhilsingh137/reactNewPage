import React, { useEffect } from "react";
import Style from "../style/content.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Content = () => {
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
    <div className={Style.Content}>
      <div className={Style.wrapper}>
        <div className={Style.Location}>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Restaurants</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Hotels</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Beauty Spa</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Home Decor</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Home Decor</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hotkey_wedding_icon.gif?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Wedding Planning</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Education</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Rent & Hire</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Hospitals</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/contractor-2022.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Contractors</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Pet Shops</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg-hostels-rooms.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>PG/Hostels</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Estate Agent</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/dentist_2023.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Dentists</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/gym_2023.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Gym</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newhotkey/loans.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Loans</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Event Organisers</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/driving_school_2023.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Driving Schools</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Packers & Movers</h2>
          </a>
          <a href="#/" data-aos="zoom-in">
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/courier_2023.svg?w=48&q=75"
                alt=""
              />
            </span>
            <h2>Courier Service</h2>
          </a>
          <div className={Style.button}>
            <span>
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hk_showmore.svg"
                alt=""
              />
            </span>
            <h2>All Categories</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
