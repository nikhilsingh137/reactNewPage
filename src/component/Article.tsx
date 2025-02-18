import React, { useState } from "react";
import Style from "../style/article.module.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Article = () => {
  const [isExpanded, setIsExpanded] = useState(null);

  const handleView = (index: any) => {
    setIsExpanded((prev) => (prev === index ? null : index));
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
        <div className={Style.title}>
          <h2>Read our latest blogs</h2>
          <a href="#/">More</a>
        </div>
        <div className={Style.Article}>
          <OwlCarousel
            className="owl-theme"
            items={3}
            loop
            margin={30}
            dots={false}
            nav={true}
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
            <div className={Style.ArticleData} data-aos="fade-left">
              <img
                src="https://www.ujudebug.com/wp-content/uploads/2024/11/Digital-Marketing-for-the-Senses-How-Multi-Sensory-Experiences-Drive-Engagement-300x235.jpg"
                alt=""
              />
              <div className={Style.ArticleText}>
                <h2>
                  How Google My Business Can Help Restaurants Increase Orders
                </h2>
                <p
                  className={
                    isExpanded === 1 ? Style.fullText : Style.truncatedText
                  }
                >
                  In today’s competitive digital landscape, local
                  businesses—especially restaurants—must embrace the power of
                  online presence to stay ahead of the competition. With the
                  increasing reliance on mobile searches, restaurants can
                  greatly benefit from leveraging Google My Business (GMB), a
                  free tool that enables businesses to manage their online
                  visibility. When utilized effectively, Google My Business can
                  boost restaurant orders, increase foot traffic, and build a
                  solid online reputation. In this article, we will discuss how
                  Google My Business can help restaurants increase orders,
                  focusing on key strategies such as map listings, business
                  listings, local SEO, and online reputation management (ORM).
                  We will also delve into the importance of review management
                  and local marketing services to enhance a restaurant's online
                  visibility, ultimately leading to more orders.
                </p>
                <span
                  onClick={() => handleView(1)}
                  style={{ cursor: "pointer" }}
                >
                  {isExpanded === 1 ? "Show Less" : "View more"}
                </span>
              </div>
            </div>
            <div className={Style.ArticleData} data-aos="fade-up">
              <img
                src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1736513723170_2mbg3_7360x4912.jpg?impolicy=queryparam&im=Resize=(828,621),aspect=fit&q=75&width=828"
                alt=""
              />
              <div className={Style.ArticleText}>
                <h2>How to Attract More Homebuyers with Local Listings</h2>
                <p
                  className={
                    isExpanded === 2 ? Style.fullText : Style.truncatedText
                  }
                >
                  In today’s highly competitive real estate market, standing out
                  can be challenging, especially when it comes to attracting
                  homebuyers. Local SEO and local business listings play an
                  essential role in boosting visibility and driving high-quality
                  leads. By leveraging tools like business listings, map
                  listings, and online reputation management (ORM), home sellers
                  can increase their chances of reaching potential buyers in
                  their area. In this article, we’ll explore how utilizing local
                  listings and related strategies can attract more homebuyers
                  and maximize your property’s visibility.
                </p>
                <span
                  onClick={() => handleView(2)}
                  style={{ cursor: "pointer" }}
                >
                  {isExpanded === 2 ? "Show Less" : "View more"}
                </span>
              </div>
            </div>
            <div className={Style.ArticleData} data-aos="zoom-in">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhQOlGAGZJsSh0_bwJDoAOdGcJVCNVWnGVw&s"
                alt=""
              />
              <div className={Style.ArticleText}>
                <h2>Best Local SEO Strategies for Real Estate Agencies</h2>
                <p
                  className={
                    isExpanded === 3 ? Style.fullText : Style.truncatedText
                  }
                >
                  In today’s competitive real estate market, it’s essential for
                  agencies to stand out and attract local clients who are
                  actively searching for properties in their area. One of the
                  most effective ways to achieve this is through Local SEO. By
                  optimizing your business for local search results, you ensure
                  your real estate agency reaches potential clients when they
                  need your services the most. In this article, we will dive
                  deep into the best Local SEO strategies for real estate
                  agencies, covering key elements like map listings, business
                  listings, local business listings, local marketing services,
                  ORM (Online Reputation Management), and review management.
                </p>
                <span
                  onClick={() => handleView(3)}
                  style={{ cursor: "pointer" }}
                >
                  {isExpanded === 3 ? "Show Less" : "View more"}
                </span>
              </div>
            </div>
            <div className={Style.ArticleData} data-aos="zoom-out">
              <img
                src="https://cdn.prod.website-files.com/5c8f894e0fcf5aab74c7e826/64463aa7d073255dcab2bbd3_1*2dJcAhaRcLxJW2tnSVy6qQ.jpeg"
                alt=""
              />
              <div className={Style.ArticleText}>
                <h2>
                  How Google My Business Can Help Restaurants Increase Orders
                </h2>
                <p
                  className={
                    isExpanded === 4 ? Style.fullText : Style.truncatedText
                  }
                >
                  In today’s competitive digital landscape, local
                  businesses—especially restaurants—must embrace the power of
                  online presence to stay ahead of the competition. With the
                  increasing reliance on mobile searches, restaurants can
                  greatly benefit from leveraging Google My Business (GMB), a
                  free tool that enables businesses to manage their online
                  visibility. When utilized effectively, Google My Business can
                  boost restaurant orders, increase foot traffic, and build a
                  solid online reputation. In this article, we will discuss how
                  Google My Business can help restaurants increase orders,
                  focusing on key strategies such as map listings, business
                  listings, local SEO, and online reputation management (ORM).
                  We will also delve into the importance of review management
                  and local marketing services to enhance a restaurant's online
                  visibility, ultimately leading to more orders.
                </p>
                <span
                  onClick={() => handleView(4)}
                  style={{ cursor: "pointer" }}
                >
                  {isExpanded === 4 ? "Show Less" : "View more"}
                </span>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Article;
