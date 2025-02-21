import React, { useState } from "react";
import Style from "../style/dashfeed.module.scss";

const DashFeed = () => {
  const [tab, setTab] = useState(1);

  const handleTab = (index: any) => {
    setTab(index);
  };

  const itemList = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg",
      title: "Mark Rose add new Listing Park Central.",
      date: "28 May 2020",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg",
      title: "Mark Rose add new Listing Park Central.",
      date: "28 May 2020",
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg",
      title: "Mark Rose add new Listing Park Central.",
      date: "28 May 2020",
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg",
      title: "Mark Rose add new Listing Park Central.",
      date: "28 May 2020",
    },
    {
      id: 5,
      img: "https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg",
      title: "Mark Rose add new Listing Park Central.",
      date: "28 May 2020",
    },
    {
      id: 6,
      img: "https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg",
      title: "Mark Rose add new Listing Park Central.",
      date: "28 May 2020",
    },
    {
      id: 7,
      img: "https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg",
      title: "Mark Rose add new Listing Park Central.",
      date: "28 May 2020",
    },
    {
      id: 8,
      img: "https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg",
      title: "Mark Rose add new Listing Park Central.",
      date: "28 May 2020",
    },
    {
      id: 9,
      img: "https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg",
      title: "Mark Rose add new Listing Park Central.",
      date: "28 May 2020",
    },
  ];

  const itemsPerPage = 6;

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
      <div className={Style.content}>
        <div className={Style.title}>
          <h2>Your feed</h2>
        </div>
        <div className={Style.contentDivide}>
          <div className={Style.leftSide}>
            {currentItems &&
              currentItems.map((item) => {
                return (
                  <div className={Style.data}>
                    <div className={Style.detail}>
                      <img
                        src="https://m.media-amazon.com/images/I/71EAm56FH6S._AC_UF894,1000_QL80_.jpg"
                        alt=""
                      />
                      <h2>
                        Mark Rose add new Listing Park Central.
                        <br />
                        <a href="#/">View Details</a>
                      </h2>
                    </div>
                    <div className={Style.time}>
                      <h2>28 may 2020</h2>
                      <h3>X</h3>
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
          <div className={Style.RightSide}>
            <div className={Style.mainbox}>
              <div className={Style.messageTab}>
                <h2
                  className={`${tab === 1 ? Style.active : ""}`}
                  onClick={() => handleTab(1)}
                >
                  <i className="fa-solid fa-rss"></i>
                  <span>Following</span>
                  <strong>7</strong>
                </h2>
                <h3
                  className={`${tab === 2 ? Style.active : ""}`}
                  onClick={() => handleTab(2)}
                >
                  <i className="fa-solid fa-users"></i>
                  <span>Followers</span>
                  <strong>4</strong>
                </h3>
              </div>
              <div
                className={`${Style.TabItemDivide}  ${
                  tab === 1 ? Style.active : ""
                }`}
              >
                <div className={`${Style.tabContent}`}>
                  <img
                    src="https://i.pinimg.com/736x/b8/9b/80/b89b8090bc7c75feb6f2523a8f68dbc4.jpg"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
                <div className={Style.tabContent}>
                  <img
                    src="https://img.freepik.com/free-photo/serene-boy-posing-with-plaid-shirt_1153-822.jpg"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
                <div className={Style.tabContent}>
                  <img
                    src="https://img.freepik.com/free-photo/portrait-boy-wearing-winter-hat_23-2148843716.jpg"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
                <div className={Style.tabContent}>
                  <img
                    src="https://img.freepik.com/free-photo/non-binary-person-sitting-bench_23-2148757537.jpg"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
                <div className={Style.tabContent}>
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-man-stylish-hipster-clothes-attractive-guy-posing-street_158538-13890.jpg"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
                <div className={Style.tabContent}>
                  <img
                    src="https://images.unsplash.com/photo-1537314258490-7f581ad90fd4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
                <div className={Style.tabContent}>
                  <img
                    src="https://media.istockphoto.com/id/1212776097/photo/portrait-of-contented-male-hispanic-teenager.jpg?s=612x612&w=0&k=20&c=qmbkIrIIvmsB2mZB6zmDyoIfZCv_JsWs058bLHcMRwU="
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
              </div>
              <div
                className={`${Style.TabItemDivide}  ${
                  tab === 2 ? Style.active : ""
                }`}
              >
                <div className={`${Style.tabContent} `}>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/041/881/384/small_2x/ai-generated-a-jewish-teenager-at-the-decorated-gate-free-photo.jpg"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
                <div className={Style.tabContent}>
                  <img
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-soldiervip-1391498.jpg&fm=jpg"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
                <div className={Style.tabContent}>
                  <img
                    src="https://i.pinimg.com/236x/2a/04/9b/2a049b15c8ec776b576c5d0929f992f7.jpg"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
                <div className={Style.tabContent}>
                  <img
                    src="https://i.pinimg.com/564x/63/f7/e9/63f7e99d2bdb21c005ce2debca4c3a9e.jpg"
                    alt=""
                  />
                  <span>Jessi Mensai</span>
                </div>
              </div>
            </div>
            <div className={Style.rightBottom}>
              <h2>
                Participate in our loyalty program. Refer a friend and get a
                discount.
              </h2>
              <a href="#/">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashFeed;
