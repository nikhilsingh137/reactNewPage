import React from "react";
import Style from "../style/sitemap.module.scss";

const Sitemap = () => {
  return (
    <div className={Style.sitemapdata}>
      <div className={Style.wrapper}>
        <div className={Style.headdata}>
          <a href="/">Home</a>
          <span>/</span>
          <p>Site Map</p>
        </div>
        <div className={Style.bannerdata}>
          <img
            src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className={Style.Cities}>
          <div className={Style.CityTitle}>
            <h2>Popular Cities</h2>
          </div>
          <div className={Style.divideCity}>
            <div className={Style.city}>
              <span>
                <img
                  src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
                  alt=""
                />
              </span>
              <h2>Delhi</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
