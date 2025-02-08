import React from "react";
import Style from "../style/productquestion.module.scss";

const ProductQuestion = () => {
  return (
    <div className={Style.Question}>
      <h2>Questions & Answers</h2>
      <a href="#/" className={Style["ask-btn"]}>
        <img
          src="https://i4.ypcdn.com/ypu/images/svgs/clipboard_1.svg?a0b7a33"
          alt="Ask"
        />
        <span>Ask a Question</span>
      </a>
      <div className={Style.QuestionData}>
        <a href="#/">
          How much does it cost to replace a bathroom sink faucet?
        </a>
        <a href="#/">How much does it cost to install a water heater?</a>
        <a href="#/">How to fix a leaky kitchen sink pipe?</a>
        <a href="#/">What's the best way to unclog a drain?</a>
        <a href="#/">How often should a water heater be serviced?</a>
        <a href="#/">What are the signs of a failing plumbing system?</a>
        <a href="#/" className={Style["see-more"]}>
          See more Questions & Answers
        </a>
      </div>
    </div>
  );
};

export default ProductQuestion;
