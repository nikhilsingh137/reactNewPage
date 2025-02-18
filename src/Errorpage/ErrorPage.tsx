import React from "react";
import Style from "../style/errorpage.module.scss";

const ErrorPage = () => {
  return (
    <div className={Style.container}>
      <div className={Style.mainbox}>
        <div className={Style.path}>
          <a href="/">Home</a>
          <i className="fa-solid fa-angle-right"></i>
          <span>404</span>
        </div>
      </div>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.Image}>
            <img
              src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
              alt=""
            />
          </div>
          <div className={Style.button}>
            <a href="/">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
