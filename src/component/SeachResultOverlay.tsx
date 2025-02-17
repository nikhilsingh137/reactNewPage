import React from "react";
import Style from "../style/searchresultoverlay.module.scss";

const SeachResultOverlay = ({ handleClick }: any) => {
  return (
    <div className={Style.overlay}>
      <div className={Style.container}>
        <div className={Style.content}>
          <h2>About Search Results</h2>
          <h3 onClick={handleClick}>X</h3>
        </div>
        <div className={Style.paragraph}>
          <p>
            YP - The Real Yellow PagesSM - helps you find the right local
            businesses to meet your specific needs. Search results are sorted by
            a combination of factors to give you a set of choices in response to
            your search criteria. These factors are similar to those you might
            use to determine which business to select from a local Yellow Pages
            directory, including proximity to where you are searching, expertise
            in the specific services or products you need, and comprehensive
            business information to help evaluate a business's suitability for
            you. “Preferred” listings, or those with featured website buttons,
            indicate YP advertisers who directly provide information about their
            businesses to help consumers make more informed buying decisions. YP
            advertisers receive higher placement in the default ordering of
            search results and may appear in sponsored listings on the top,
            side, or bottom of the search results page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeachResultOverlay;
