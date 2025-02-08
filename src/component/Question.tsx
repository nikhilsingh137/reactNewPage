import React from "react";
import Style from "../style/question.module.scss";

const Question = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.text}>
            <h2>Questions and Answers</h2>
            <h3>How much is a tankless water heater?</h3>
            <h4>Who should I contact for bankruptcy advice?</h4>
          </div>
          <div className={Style.question}>
            <span>Ask questions to the YP community</span>
            <span>Share your knowledge to help out others</span>
            <span>Find answers or offer solutions</span>
          </div>
          <a href="#/">Ask a Question</a>
          <div className={Style.Image}>
            <span>
              <img
                src="https://storage.googleapis.com/website-production/uploads/2023/04/how-to-work-with-difficult-clients.webp"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
