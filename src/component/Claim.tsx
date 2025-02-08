import React from "react";
import Style from "../style/claim.module.scss";

const Claim = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.Image}>
            <img
              src="https://i4.ypcdn.com/ypu/images/home/claim.png?a0b7a33"
              alt=""
            />
          </div>
          <div className={Style.mainbox}>
            <div className={Style.text}>
              <h2>
                Manage your <span>free </span>listing.
              </h2>
              <p>
                Update your business information in a few steps. Make it easy
                for your customers to find you on Yellowpages.
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
