import React, { useState } from "react";
import Style from "../style/productlisting.module.scss";
import SeachResultOverlay from "../component/SeachResultOverlay";
import ProductListingData from "./ProductListingData";
import ProductContent from "./ProductContent";
import ProductArticle from "./ProductArticle";
import Question from "../component/Question";

const ProductListing = () => {
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(itemList.length / itemsPerPage);

  const [overlay, setOverlay] = useState(false);

  const handleOverlay = () => {
    setOverlay(true);
  };

  const handleClick = () => {
    setOverlay(false);
  };

  return (
    <div className={Style.container}>
      <>{overlay && <SeachResultOverlay handleClick={handleClick} />}</>
      <div className={Style.content}>
        <div className={Style.navbar}>
          <ul>
            <li>
              <img
                src="https://i2.ypcdn.com/ypu/images/svgs/auto-services.svg?a0b7a33"
                alt=""
              />
              <span>auto services</span>
            </li>
            <li>
              <img
                src="	https://i2.ypcdn.com/ypu/images/svgs/beauty.svg?a0b7a33"
                alt=""
              />
              <span>beauty</span>
            </li>
            <li>
              <img
                src="https://i3.ypcdn.com/ypu/images/svgs/home-services.svg?a0b7a33"
                alt=""
              />
              <span>home services</span>
            </li>
            <li>
              <img
                src="	https://i1.ypcdn.com/ypu/images/svgs/insurance.svg?a0b7a33"
                alt=""
              />
              <span>insurance</span>
            </li>
            <li>
              <img
                src="	https://i4.ypcdn.com/ypu/images/svgs/legal-services.svg?a0b7a33"
                alt=""
              />
              <span>legal services</span>
            </li>
            <li>
              <img
                src="https://i3.ypcdn.com/ypu/images/svgs/medical-services.svg?a0b7a33"
                alt=""
              />
              <span>medical services</span>
            </li>
            <li>
              <img
                src="https://i4.ypcdn.com/ypu/images/svgs/pet-services.svg?a0b7a33"
                alt=""
              />
              <span>pet services</span>
            </li>
            <li>
              <img
                src="https://i3.ypcdn.com/ypu/images/svgs/restaurants.svg?a0b7a33"
                alt=""
              />
              <span>restaurants</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={Style.wrapper}>
        <div className={Style.mainbox}>
          <div className={Style.title}>
            <h2>Restaurants</h2>
          </div>
          <div className={Style.Main}>
            <div className={Style.leftAside}>
              <div className={Style.divide}>
                <div className={Style.data}>
                  <a href="/map">Map View</a>
                  <a href="/all-product">All</a>
                  <a href="#/">Category</a>
                </div>
                <div className={Style.sort}>
                  Sort :{" "}
                  <a href="#/">
                    Default <i className="fa-solid fa-angle-down"></i>
                  </a>
                </div>
              </div>
              <div className={Style.listItem}>
                <ProductListingData itemList={currentItems} />
                <div className={Style.paginationButton}>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={currentPage === index + 1 ? "active" : ""}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className={Style.rightAside}>
              <div className={Style.rightdetail}>
                <h2 onClick={handleOverlay}>About Search Results</h2>
              </div>
              <div className={Style.rightListing}>
                <a href="#/">
                  <h2>
                    Manage your <br />
                    <b>free</b> listing
                  </h2>
                  <img
                    src="	https://i3.ypcdn.com/ypu/images/srp-claim-banner.png?a0b7a33"
                    alt=""
                  />
                  <p>Update your business information in a few steps.</p>
                  <button>Claim Your Listing</button>
                </a>
              </div>
              <div className={Style.rightBanner}>
                <img
                  src="https://www.ipsos.com/sites/default/files/inline-images/WeDontNeedToTalkAboutAds%20pdf.png"
                  alt=""
                />
              </div>
              <div className={Style.rightBanner}>
                <img
                  src="https://img.freepik.com/free-vector/facebook-influencer-background_23-2147822578.jpg"
                  alt=""
                />
              </div>
              <div className={Style.rightBanner}>
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/travel-ads-design-template-3cc8c79f504ffbd707697e72b7821ef2_screen.jpg?ts=1707837394"
                  alt=""
                />
              </div>
              <div className={Style.rightBanner}>
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_250/https://themillbrooktimes.ca/wp-content/uploads/2013/11/Screen-Shot-2016-01-22-at-3.01.43-PM.png"
                  alt=""
                />
              </div>
              <div className={Style.rightBanner}>
                <img
                  src="https://www.creatopy.com/blog/wp-content/uploads/2019/09/online-banking-travel-financial-service-ad-424x600.jpg"
                  alt=""
                />
              </div>
              <div className={Style.rightBanner}>
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-marketing-ads-design-template-5b0a01d1712c34a42c9f6d6c45c8986e_screen.jpg?ts=1650617472"
                  alt=""
                />
              </div>
            </div>
          </div>
          <ProductArticle />
          <ProductContent />
          <Question />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
