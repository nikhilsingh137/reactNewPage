import React, { useState } from "react";
import Style from "../style/imagebox.module.scss";

const ImageBox = () => {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = (e: any) => {};

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
              <h3> Business Trading Directory</h3>
              <h2>Find a Business Near You</h2>
              <div className={Style.seachBox}>
                <form onSubmit={handleSubmit}>
                  <div className={Style.box}>
                    <input
                      type="text"
                      placeholder="Search Businesses"
                      value={data}
                      onChange={(e: any) => setData(e.target.value)}
                    />
                  </div>
                  <div className={Style.box}>
                    <i className="fa-solid fa-location-dot"></i>
                    <input
                      type="text"
                      placeholder="Location"
                      value={location}
                      onChange={(e: any) => setLocation(e.target.value)}
                    />
                  </div>
                  <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className={Style.Category}>
                <ul>
                  <li>
                    <a href="#/">
                      <i className="fa-solid fa-burger"></i>
                      <span>Restaurants</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa-solid fa-bed"></i>
                      <span>Hotels</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa-solid fa-bag-shopping"></i>
                      <span>Shops</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa-solid fa-dumbbell"></i>
                      <span>Fitness</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="fa-solid fa-martini-glass-citrus"></i>
                      <span>Coctail</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
