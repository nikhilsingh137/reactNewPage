import React, { useState } from "react";
import Style from "../style/imagebox.module.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageBox = () => {
  const [data, setData] = useState({
    location: "",
    businessName: "",
    serviceType: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      !data.location.trim() ||
      !data.businessName.trim() ||
      !data.serviceType.trim()
    ) {
      return;
    }
    setData({ location: "", businessName: "", serviceType: "" });
    setIsSubmitted(false);
  };

  AOS.init({
    offset: 100,
    duration: 1200,
    easing: "ease-in-out",
    delay: 200,
  });
  return (
    <div className={Style.Imagebox}>
      <div className={Style.wrapper}>
        <div className={Style.Image}>
          <div className={Style.data}>
            <span>
              <img
                src="https://images.unsplash.com/photo-1655392032425-f82b69440d0c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA=="
                alt=""
              />
            </span>
          </div>
          <div className={Style.text}>
            <div className={Style.content}>
              <h3 data-aos="slide-up"> Business Trading Directory</h3>
              <h2 data-aos="slide-down">Find a Business Near You</h2>
              <div className={Style.searchBoxContainer} data-aos="zoom-in">
                <form
                  className={`${Style.searchBox} ${
                    isSubmitted &&
                    (!data.location || !data.businessName || !data.serviceType)
                      ? Style.errorBorder
                      : ""
                  }`}
                  onSubmit={handleSubmit}
                >
                  <div className={Style.inputGroup}>
                    <i className="fa-solid fa-location-dot"></i>
                    <input
                      type="text"
                      placeholder="Enter Location"
                      name="location"
                      value={data.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={Style.inputGroup}>
                    <i className="fa-solid fa-building"></i>
                    <input
                      type="text"
                      placeholder="Business Name"
                      name="businessName"
                      value={data.businessName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={Style.inputGroup}>
                    <i className="fa-solid fa-briefcase"></i>
                    <input
                      type="text"
                      placeholder="Service Type"
                      name="serviceType"
                      value={data.serviceType}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className={Style.searchButton}>
                    <i className="fa-solid fa-magnifying-glass"></i> Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
