import React from "react";
import Style from "../style/dashreview.module.scss";
import { useState } from "react";

const DashReview = () => {
  const itemList = [
    {
      id: 1,
      imgUrl:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2024/09/alpaca-haircut-trend.jpg?resize=720%2C780",
      name: "Brendon Rose",
      rating: "4.2",
      comment:
        " Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. ",
    },
    {
      id: 2,
      imgUrl:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2024/09/alpaca-haircut-trend.jpg?resize=720%2C780",
      name: "Brendon Rose",
      rating: "4.2",
      comment:
        " Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. ",
      img: [
        {
          id: 1,
          img: "https://honeywell.scene7.com/is/image/honeywell/hotel-bulgari:1-1-square?wid=474&hei=474&dpr=off",
        },
        {
          id: 2,
          img: "https://images.trvl-media.com/lodging/17000000/16290000/16281000/16280924/w2880h1621x0y151-a005f6ca.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          id: 3,
          img: "https://images.trvl-media.com/lodging/17000000/16290000/16281000/16280924/w2880h1621x0y151-a005f6ca.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          id: 4,
          img: "https://images.trvl-media.com/lodging/17000000/16290000/16281000/16280924/w2880h1621x0y151-a005f6ca.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
      ],
    },
    {
      id: 3,
      imgUrl:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2024/09/alpaca-haircut-trend.jpg?resize=720%2C780",
      name: "Brendon Rose",
      rating: "4.2",
      comment:
        " Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. ",
    },
    {
      id: 4,
      imgUrl:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2024/09/alpaca-haircut-trend.jpg?resize=720%2C780",
      name: "Brendon Rose",
      rating: "4.2",
      comment:
        " Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. ",
    },
    {
      id: 5,
      imgUrl:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2024/09/alpaca-haircut-trend.jpg?resize=720%2C780",
      name: "Brendon Rose",
      rating: "4.2",
      comment:
        " Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. ",
      img: [
        {
          id: 1,
          img: "https://honeywell.scene7.com/is/image/honeywell/hotel-bulgari:1-1-square?wid=474&hei=474&dpr=off",
        },
        {
          id: 2,
          img: "https://images.trvl-media.com/lodging/17000000/16290000/16281000/16280924/w2880h1621x0y151-a005f6ca.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          id: 3,
          img: "https://images.trvl-media.com/lodging/17000000/16290000/16281000/16280924/w2880h1621x0y151-a005f6ca.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          id: 4,
          img: "https://images.trvl-media.com/lodging/17000000/16290000/16281000/16280924/w2880h1621x0y151-a005f6ca.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
      ],
    },
  ];

  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages: any = Math.ceil(itemList.length / itemsPerPage);

  const indexOfLastItem: any = currentPage * itemsPerPage;
  const indexOfFirstItem: any = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <h2>Your Reviews</h2>
      </div>
      <div className={Style.mainbox}>
        {currentItems &&
          currentItems.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.Image}>
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className={Style.Data}>
                  <div className={Style.detail}>
                    <div className={Style.name}>
                      <h2>{item.name}</h2>
                    </div>
                    <div className={Style.rating}>
                      <h2>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </h2>
                      <h3>{item.rating}</h3>
                    </div>
                  </div>
                  <div className={Style.comment}>
                    <p>{item.comment}</p>
                  </div>
                  <div className={Style.Imagebox}>
                    {item.img &&
                      item.img.map((item) => {
                        return (
                          <span>
                            <img src={item.img} alt="" />
                          </span>
                        );
                      })}
                  </div>
                  <div className={Style.time}>
                    <div className={Style.date}>
                      <h2>12 April 2018</h2>
                    </div>
                    <div className={Style.reply}>
                      <a href="#/">Reply</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className={Style.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? Style.active : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashReview;
