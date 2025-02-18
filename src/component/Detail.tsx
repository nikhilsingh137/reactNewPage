import React, { useEffect } from "react";
import Style from "../style/detail.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Detail = () => {
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
    <div className={Style.Detail}>
      <div className={Style.title} data-aos="fade-down">
        <h2>How It Works</h2>
        <p>
          Explore some of the best tips from around the world from our partners
          and friends.lacinia viverra lectus.
        </p>
      </div>
      <div className={Style.wrapper}>
        <div className={Style.content} data-aos="fade-left">
          <span>
            <img
              src="https://s.alicdn.com/@img/imgextra/i3/O1CN01IqRqQr1UYmu3AOqmF_!!6000000002530-2-tps-96-96.png"
              alt=""
            />
          </span>
          <h2>Millions of business offerings</h2>
          <p>
            Explore products and suppliers for your business from millions of
            offerings worldwide.
          </p>
        </div>
        <div className={Style.content} data-aos="fade-right">
          <span>
            <img
              src="https://s.alicdn.com/@img/imgextra/i1/O1CN01yTM8EE1GOLFPjalEn_!!6000000000612-2-tps-96-96.png"
              alt=""
            />
          </span>
          <h2>Assured quality and transactions</h2>
          <p>
            Ensure production quality from verified suppliers, with your orders
            protected from payment to delivery.
          </p>
        </div>
        <div className={Style.content} data-aos="fade-up">
          <span>
            <img
              src="https://s.alicdn.com/@img/imgextra/i3/O1CN01TFyXvb261lkMrez96_!!6000000007602-2-tps-96-96.png"
              alt=""
            />
          </span>
          <h2>One-stop trading solution</h2>
          <p>
            Order seamlessly from product/supplier search to order management,
            payment, and fulfillment.
          </p>
        </div>
        <div className={Style.content} data-aos="slide-right">
          <span>
            <img
              src="https://s.alicdn.com/@img/imgextra/i4/O1CN01xIFSCp1DYT9tsnHfj_!!6000000000228-2-tps-96-96.png"
              alt=""
            />
          </span>
          <h2>Tailored trading experience</h2>
          <p>
            Get curated benefits, such as exclusive discounts, enhanced
            protection, and extra support, to help grow your business every step
            of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
