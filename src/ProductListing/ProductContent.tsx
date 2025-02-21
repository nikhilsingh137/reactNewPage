import React from "react";
import Style from "../style/productcontent.module.scss";

const ProductContent = () => {
  return (
    <div className={Style.titleContent}>
      <div className={Style.contentData}>
        <h2>Plumber</h2>
        <p>
          Plumbing is one of the most essential services in modern society. It
          provides clean water for drinking, cooking, and hygiene while ensuring
          proper disposal of wastewater. Without a well-maintained plumbing
          system, homes and businesses would face numerous health and safety
          risks, such as water contamination, leaks, and structural damage.
          Professional plumbers play a crucial role in keeping these systems
          functional, safe, and efficient.
        </p>
      </div>
      <div className={Style.contentData}>
        <h2>What Does a Plumber Do?</h2>
        <p>
          They work with water supply lines, drainage systems, heating units,
          and gas pipelines. Some plumbers specialize in areas like new
          construction plumbing, emergency plumbing repairs, or commercial
          plumbing services.
        </p>
        <ul>
          <li>
            Setting up pipes, faucets, sinks, toilets, and showers in new
            buildings.
          </li>
          <li>
            Installing and connecting appliances like dishwashers and washing
            machines.
          </li>
          <li>Fixing leaks in pipes, faucets, and water heaters.</li>
          <li>Installing and repairing water heaters (tank and tankless).</li>
          <li>Inspecting and repairing sewer lines.</li>
          <li>
            Installing and maintaining gas pipelines for homes and businesses.
          </li>
          <li>Fixing burst pipes, overflowing toilets, and severe leaks.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductContent;
