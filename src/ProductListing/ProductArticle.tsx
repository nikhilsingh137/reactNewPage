import React, { useState } from "react";
import Style from "../style/productarticle.module.scss";

const ProductArticle = () => {
  const [isExpanded, setIsExpanded] = useState(null);

  const handleView = (index: any) => {
    setIsExpanded((prev) => (prev === index ? null : index));
  };
  return (
    <div className={Style.Article}>
      <div className={Style.ArticleData}>
        <img
          src="https://i4.ypcdn.com/blob/17b111f00f49e915fc0e57321727c14f9fd522c4"
          alt=""
        />
        <div className={Style.ArticleText}>
          <p
            className={isExpanded === 1 ? Style.fullText : Style.truncatedText}
          >
            Hard water can cause scaly buildup on your bathroom and kitchen
            fixtures; increase water bills; and clog pipes. Learn what you can
            do about it.Hard water has a heavy concentration of minerals, such
            as calcium and magnesium. The less mineral content water has, the
            softer it is. Water softeners work by filtering out calcium and
            magnesium ions, leaving you with softer water. When rainwater fall,
            it is soft and devoid of minerals, but acquires mineral content as
            it travels through rock and soil. Water hardness is measured in
            grains per gallon (gpg). Hard water generally measures between 7 to
            10.5 gpg or more.
          </p>
          <span onClick={() => handleView(1)} style={{ cursor: "pointer" }}>
            {isExpanded === 1 ? "Show Less" : "View"}
          </span>
        </div>
      </div>
      <div className={Style.ArticleData}>
        <img
          src="https://i2.ypcdn.com/blob/c8930c200db2009b718fb243328a44663b41e5da"
          alt=""
        />
        <div className={Style.ArticleText}>
          <p
            className={isExpanded === 2 ? Style.fullText : Style.truncatedText}
          >
            Water heaters differ in terms of the fuel they require. Each type of
            water heater has its strengths and drawbacks, including fuel type,
            and it can be helpful to know what these are before investing in a
            unit.heat water using coils that resemble those in an electric oven.
            The prime benefit of this type of heater is that it's less expensive
            and can be easier to install. However, electric water heaters are
            usually less energy efficient than heaters that use other types of
            fuel. They also have limitations around how much hot water they can
            provide, and are best suited for homes with fewer than five people.
          </p>
          <span onClick={() => handleView(2)} style={{ cursor: "pointer" }}>
            {isExpanded === 2 ? "Show Less" : "View"}
          </span>
        </div>
      </div>
      <div className={Style.ArticleData}>
        <img
          src="	https://i4.ypcdn.com/blob/439f2e162fef6d438c2c715ccdb51b10110a0a12"
          alt=""
        />
        <div className={Style.ArticleText}>
          <p
            className={isExpanded === 3 ? Style.fullText : Style.truncatedText}
          >
            Decide if a traditional water heater is right for you, and how to
            find the right one.Water heaters ensure that your home has hot water
            available for showering, bathing, laundry, and washing dishes. A
            traditional water heater stores and heats water in a tank, and this
            water is replenished as it is used. Use the information below to
            help decide if a traditional water heater is right for you, and how
            to find the right one. They're relatively inexpensive. Some people
            are surprised to find out that traditional water heaters are not the
            only option; there are also tankless water heaters. But traditional
            water heaters are less expensive than tankless water heaters, and
            they are cheaper to install.
          </p>
          <span onClick={() => handleView(3)} style={{ cursor: "pointer" }}>
            {isExpanded === 3 ? "Show Less" : "View"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductArticle;
