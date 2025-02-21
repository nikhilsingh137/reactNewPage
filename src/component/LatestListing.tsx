import React, { useEffect } from "react";
import Style from "../style/latestListing.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestListing = () => {
  const itemList = [
    {
      name: "Luxary Resaturant",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/cb/8d/c2/eat-drink-explore-lots.jpg?w=1200&h=-1&s=1",
      categories: "Restaurants",
      text: "Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.",
      phone: "(561) 922-8740",
      address: "4100 NW 120th Ave, Coral Springs, FL 33065",
      websiteLink: "https://www.henrysofbocaraton.com/",
      rating: "4.2",
      views: "12",
    },
    {
      name: "Luxary Resaturant",
      imageUrl:
        "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2018/10/cloths-feature.jpg",
      categories: "Restaurants",
      text: "Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.",
      phone: "(561) 922-8740",
      address: "4100 NW 120th Ave, Coral Springs, FL 33065",
      websiteLink: "https://www.henrysofbocaraton.com/",
      rating: "4.2",
      views: "12",
    },
    {
      name: "Luxary Resaturant",
      imageUrl:
        "https://www.shutterstock.com/shutterstock/videos/1102906999/thumb/2.jpg?ip=x480",
      categories: "Restaurants",
      text: "Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.",
      phone: "(561) 922-8740",
      address: "4100 NW 120th Ave, Coral Springs, FL 33065",
      websiteLink: "https://www.henrysofbocaraton.com/",
      rating: "4.2",
      views: "12",
    },
    {
      name: "Luxary Resaturant",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/cb/8d/c2/eat-drink-explore-lots.jpg?w=1200&h=-1&s=1",
      categories: "Restaurants",
      text: "Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.",
      phone: "(561) 922-8740",
      address: "4100 NW 120th Ave, Coral Springs, FL 33065",
      websiteLink: "https://www.henrysofbocaraton.com/",
      rating: "4.2",
      views: "12",
    },
  ];

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
      <div className={Style.title}>
        <h2>The Feature Listings</h2>
      </div>
      <div className={Style.wrapper}>
        <OwlCarousel
          autoplay
          margin={20}
          items={3}
          loop
          autoplayTimeout={8000}
          autoplaySpeed={1000}
          nav
          responsive={{
            0: {
              items: 1,
            },
            769: {
              items: 2,
            },
            993: {
              items: 3,
            },
          }}
        >
          {itemList &&
            itemList.map((item) => {
              return (
                <div className={Style.Image} data-aos="fade-up">
                  <a href="#/">
                    <span>
                      <img src={item.imageUrl} alt="" />
                    </span>
                    <div className={Style.content}>
                      <div className={Style.ContentDeatil}>
                        <i className="fa-regular fa-heart"></i>
                        <h2>
                          <i className="fa-solid fa-lock-open"></i>Open Now
                        </h2>
                      </div>
                      <div className={Style.FullDetail}>
                        <div className={Style.contentData}>
                          <div className={Style.name}>
                            <h2>{item.name}</h2>
                            <h3>{item.address}</h3>
                          </div>
                          <div className={Style.ratingData}>
                            <h2>{item.rating}</h2>
                            <div className={Style.ratingStar}>
                              <div className={Style.star}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                              <h3>{item.views} Reviews</h3>
                            </div>
                          </div>
                        </div>
                        <div className={Style.Category}>
                          <h2>
                            <i className="fa-solid fa-burger"></i>
                            {item.categories}
                          </h2>
                          <h3>
                            <i className="fa-solid fa-phone"></i>
                            {item.phone}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default LatestListing;
