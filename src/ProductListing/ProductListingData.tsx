import React, { useState } from "react";
import Style from "../style/productlistingdata.module.scss";

const ProductListingData = ({ itemList }: any) => {
  const [banner, setBanner] = useState({
    1: true,
    2: true,
  });

  const handleBanner = (index: number) => {
    setBanner((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  return (
    <>
      {itemList &&
        itemList.map((item: any, index: any) => {
          return (
            <>
              <div className={Style.ProductData}>
                <a href="#/">
                  <div className={Style.productImage}>
                    <span>
                      <img src={item.imageUrl} alt="" />
                    </span>
                    <div className={Style.productImageContent}>
                      <div className={Style.ProductImageIcon}>
                        <i className="fa-regular fa-heart"></i>
                        <h2>
                          <i className="fa-solid fa-lock-open"></i>Open Now
                        </h2>
                      </div>
                      <div className={Style.ProductRatingDetail}>
                        <h2>{item.rating}</h2>
                        <div className={Style.RatingDetail}>
                          <div className={Style.rating}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <h3>{item.views} Reviews</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className={Style.productContent}>
                  <div className={Style.name}>
                    <h2>{item.name}</h2>
                    <h3>
                      <i className="fa-solid fa-location-dot"></i>
                      {item.address}
                    </h3>
                  </div>
                  <div className={Style.productParagraph}>
                    <p>{item.text}</p>
                    <div className={Style.ContactButton}>
                      <a href={item.websiteLink}>
                        <i className="fa-solid fa-link"></i>Website
                      </a>
                      <a href="https://www.whatsapp.com/">
                        <i className="fa-brands fa-whatsapp"></i>WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className={Style.category}>
                    <h2>{item.categories}</h2>
                    <h3>
                      <i className="fa-solid fa-phone"></i>
                      {item.phone}
                    </h3>
                  </div>
                </div>
              </div>
              {banner[1] && index === 2 && (
                <div className={Style.ListingBanner}>
                  <a href="#/">
                    <span>
                      <img
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/floatbanner_freelisting.png"
                        alt=""
                      />
                    </span>
                    <div className={Style.listingBannerText}>
                      <h2>Grow Your Business in </h2>
                      <h3>3 Easy Steps</h3>
                    </div>
                    <h4 onClick={() => handleBanner(1)}>X</h4>
                  </a>
                </div>
              )}
              {banner[2] && index === 5 && (
                <div className={Style.ListingBanner}>
                  <a href="#/">
                    <span>
                      <img
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/floatbanner_freelisting.png"
                        alt=""
                      />
                    </span>
                    <div className={Style.listingBannerText}>
                      <h2>Grow Your Business in </h2>
                      <h3>3 Easy Steps</h3>
                    </div>
                    <h4 onClick={() => handleBanner(2)}>X</h4>
                  </a>
                </div>
              )}
            </>
          );
        })}
    </>
  );
};

export default ProductListingData;
