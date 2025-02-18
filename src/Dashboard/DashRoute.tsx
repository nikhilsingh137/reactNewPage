import React from "react";
import Style from "../style/dashroute.module.scss";
import DashboardStatic from "./DashboardStatic";
import DashFeed from "./DashFeed";
import DashProfile from "./DashProfile";
import DashMessage from "./DashMessage";
import DashPassword from "./DashPassword";
import DashListings from "./DashListings";
import DashBooking from "./DashBooking";
import DashReview from "./DashReview";
import DashAddItem from "./DashAddItem";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const DashRoute = () => {
  const navigate = useNavigate();
  const { subpage } = useParams();

  const handleNavigation = (index: any) => {
    navigate(index === "dashboard" ? "/dashboard" : `/dashboard/${index}`);
  };

  return (
    <div className={Style.container}>
      <div className={Style.DashRoute}>
        <div className={Style.Image}>
          <img
            src="https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149009903.jpg"
            alt=""
          />
          <div className="highlight"></div>
        </div>
        <div className={Style.route}>
          <div className={Style.wrapper}>
            <div className={Style.path}>
              <a href="/">Home</a>
              <a href="/dashboard">DashBoard</a>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.content}>
        <div className={Style.wrapper1}>
          <div className={Style.Image}>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZVw1MspvERwhlmdE63mTumxG8S0YXybT5RIkfw2amSOR1Y-qK"
              alt=""
            />
          </div>
          <div className={Style.divide}>
            <div className={Style.profile}>
              <div className={Style.name}>
                <h2>Welcome : Alisa Noory</h2>
              </div>
              <div className={Style.detail}>
                <div className={Style.detailData}>
                  <i className="fa-solid fa-map-location"></i>
                  <h2>
                    Active Listings <br />
                    <strong>21</strong>
                  </h2>
                </div>
                <div className={Style.detailData}>
                  <i className="fa-regular fa-chart-bar"></i>
                  <h2>
                    Listing Views
                    <br />
                    <strong>1079</strong>
                  </h2>
                </div>
                <div className={Style.detailData}>
                  <i className="fa-regular fa-comment"></i>
                  <h2>
                    Total Reviews
                    <br />
                    <strong>79</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.mainbox}>
            <div className={Style.leftAside}>
              <div className={Style.leftContent}>
                <div className={Style.leftTop}>
                  <h2>Main</h2>
                  <ul>
                    <li
                      onClick={(e) => handleNavigation("dashboard")}
                      className={`${subpage === undefined ? Style.active : ""}`}
                    >
                      <NavLink to="/dashboard">
                        <i className="fa-solid fa-chart-line"></i>Dashboard
                      </NavLink>
                    </li>
                    <li
                      onClick={() => handleNavigation("feed")}
                      className={`${subpage === "feed" ? Style.active : ""}`}
                    >
                      <NavLink to="/dashboard/feed">
                        <i className="fa-solid fa-chart-line"></i>Your Feed
                      </NavLink>
                    </li>
                    <li
                      onClick={(e) => handleNavigation("profile")}
                      className={`${subpage === "profile" ? Style.active : ""}`}
                    >
                      <NavLink to="/dashboard/profile">
                        <i className="fa-solid fa-chart-line"></i> Edit profile
                      </NavLink>
                    </li>
                    <li
                      onClick={(e) => handleNavigation("messeges")}
                      className={`${
                        subpage === "messeges" ? Style.active : ""
                      }`}
                    >
                      <NavLink to="/dashboard/messeges">
                        <i className="fa-solid fa-chart-line"></i>Messeges
                      </NavLink>
                    </li>
                    <li
                      onClick={(e) => handleNavigation("password")}
                      className={`${
                        subpage === "password" ? Style.active : ""
                      }`}
                    >
                      <NavLink to="/dashboard/password">
                        <i className="fa-solid fa-chart-line"></i>Change
                        Password
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className={Style.leftTop}>
                  <h2>Listings</h2>
                  <ul>
                    <li
                      onClick={(e) => handleNavigation("listings")}
                      className={`${
                        subpage === "listings" ? Style.active : ""
                      }`}
                    >
                      <NavLink to="/dashboard/listings">
                        <i className="fa-solid fa-chart-line"></i>Listings
                      </NavLink>
                    </li>
                    <li
                      onClick={(e) => handleNavigation("bookings")}
                      className={`${
                        subpage === "bookings" ? Style.active : ""
                      }`}
                    >
                      <NavLink to="/dashboard/bookings">
                        <i className="fa-solid fa-chart-line"></i>Bookings
                      </NavLink>
                    </li>
                    <li
                      onClick={(e) => handleNavigation("reviews")}
                      className={`${subpage === "reviews" ? Style.active : ""}`}
                    >
                      <NavLink to="/dashboard/reviews">
                        <i className="fa-solid fa-chart-line"></i>Reviews
                      </NavLink>
                    </li>
                    <li
                      onClick={(e) => handleNavigation("new")}
                      className={`${subpage === "new" ? Style.active : ""}`}
                    >
                      <NavLink to="/dashboard/new">
                        <i className="fa-solid fa-chart-line"></i>Add New
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className={Style.leftbutton}>
                  <a href="#/">LogOut</a>
                </div>
              </div>
              <div className={Style.leftBottom}>
                <a href="#/">Back to menu</a>
              </div>
            </div>
            <div className={Style.rightAside}>
              {!subpage && <DashboardStatic />}
              {subpage === "feed" && <DashFeed />}
              {subpage === "profile" && <DashProfile />}
              {subpage === "messeges" && <DashMessage />}
              {subpage === "password" && <DashPassword />}
              {subpage === "listings" && <DashListings />}
              {subpage === "bookings" && <DashBooking />}
              {subpage === "reviews" && <DashReview />}
              {subpage === "new" && <DashAddItem />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashRoute;
