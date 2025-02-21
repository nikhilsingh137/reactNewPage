import React, { useState } from "react";
import Style from "../style/maplocation.module.scss";
import SeachResultOverlay from "../component/SeachResultOverlay";

const MapLocation = () => {
  const itemList = [
    {
      id: 1,
      imgUrl:
        "https://i1.ypcdn.com/ypu/images/default-thumbnails-v2/thumbnail-6.svg?a0b7a33",
      title: "Beasley-Carter's Septic and Rooter Service",
      location: "2827 Forest View Rd.Kingsport, TN 37660",
    },
    {
      id: 2,
      imgUrl:
        "https://i1.ypcdn.com/ypu/images/default-thumbnails-v2/thumbnail-6.svg?a0b7a33",
      title: "Beasley-Carter's Septic and Rooter Service",
      location: "2827 Forest View Rd.Kingsport, TN 37660",
    },
    {
      id: 3,
      imgUrl:
        "https://i1.ypcdn.com/ypu/images/default-thumbnails-v2/thumbnail-6.svg?a0b7a33",
      title: "Beasley-Carter's Septic and Rooter Service",
      location: "2827 Forest View Rd.Kingsport, TN 37660",
    },
    {
      id: 4,
      imgUrl:
        "https://i1.ypcdn.com/ypu/images/default-thumbnails-v2/thumbnail-6.svg?a0b7a33",
      title: "Beasley-Carter's Septic and Rooter Service",
      location: "2827 Forest View Rd.Kingsport, TN 37660",
    },
    {
      id: 5,
      imgUrl:
        "https://i1.ypcdn.com/ypu/images/default-thumbnails-v2/thumbnail-6.svg?a0b7a33",
      title: "Beasley-Carter's Septic and Rooter Service",
      location: "2827 Forest View Rd.Kingsport, TN 37660",
    },
    {
      id: 6,
      imgUrl:
        "https://i1.ypcdn.com/ypu/images/default-thumbnails-v2/thumbnail-6.svg?a0b7a33",
      title: "Beasley-Carter's Septic and Rooter Service",
      location: "2827 Forest View Rd.Kingsport, TN 37660",
    },
    {
      id: 7,
      imgUrl:
        "https://i1.ypcdn.com/ypu/images/default-thumbnails-v2/thumbnail-6.svg?a0b7a33",
      title: "Beasley-Carter's Septic and Rooter Service",
      location: "2827 Forest View Rd.Kingsport, TN 37660",
    },
    {
      id: 8,
      imgUrl:
        "https://i1.ypcdn.com/ypu/images/default-thumbnails-v2/thumbnail-6.svg?a0b7a33",
      title: "Beasley-Carter's Septic and Rooter Service",
      location: "2827 Forest View Rd.Kingsport, TN 37660",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleShow = () => {
    setShow(false);
  };
  return (
    <div className={Style.container}>
      <>{show && <SeachResultOverlay handleClick={handleShow} />}</>
      <div className={Style.leftAside}>
        <div className={Style.LeftTop}>
          <div className={Style.path}>
            <a href="/">
              Home <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
          <div className={Style.title}>
            <h2>Plumbers in Gainesville</h2>
            <h3 onClick={handleClick}>About Search Results</h3>
          </div>
          <div className={Style.button}>
            <div className={Style.leftButton}>
              <a href="/product">☰ List View</a>
              <a href="#/">All</a>
            </div>
            <div className={Style.rightButton}>
              Sort:{" "}
              <span>
                Default <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
        </div>
        <div className={Style.LeftBottom}>
          {itemList &&
            itemList.map((item) => {
              return (
                <div className={Style.listItem}>
                  <span>
                    <img src={item.imgUrl} alt="" />
                  </span>
                  <div className={Style.listContent}>
                    <a href="#/">{item.title}</a>
                    <h2>{item.location}</h2>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className={Style.RightAside}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28030.18449244186!2d77.26885619999999!3d28.5765766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin&scrollwheel=false"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default MapLocation;
