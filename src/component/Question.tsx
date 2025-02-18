import React, { useEffect } from "react";
import Style from "../style/question.module.scss";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Question = () => {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    e.preventDefault();
    navigate("/ask");
    document.body.style.overflow = "hidden";
  };

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
          <div className={Style.text} data-aos="slide-up">
            <h2>Questions and Answers</h2>
            <h3>How much is a tankless water heater?</h3>
            <h4>Who should I contact for bankruptcy advice?</h4>
          </div>
          <div className={Style.question} data-aos="slide-left">
            <span>Ask questions to the YP community</span>
            <span>Share your knowledge to help out others</span>
            <span>Find answers or offer solutions</span>
          </div>
          <div className={Style.button} data-aos="zoom-in">
            <a href="#/" onClick={handleClick}>
              Ask a Question
            </a>
          </div>
          <div className={Style.Image} data-aos="zoom-out">
            <span>
              <img
                src="https://storage.googleapis.com/website-production/uploads/2023/04/how-to-work-with-difficult-clients.webp"
                alt=""
              />
            </span>
          </div>
          <div className={Style.category}>
            <h2>Browse Popular Questions & Answers</h2>
            <ul>
              <li>
                <a href="#/">Dentists</a>
              </li>
              <li>
                <a href="#/">Family Law</a>
              </li>
              <li>
                <a href="#/">Insurance</a>
              </li>
              <li>
                <a href="#/">Auto Repair</a>
              </li>
              <li>
                <a href="#/">Home Improvement</a>
              </li>
              <li>
                <a href="#/">Dogs</a>
              </li>
              <li>
                <a href="#/">Plumbing</a>
              </li>
              <li>
                <a href="#/">Restuarent</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
