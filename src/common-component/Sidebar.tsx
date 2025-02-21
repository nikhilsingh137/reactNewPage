import React from "react";
import Style from "../style/sidebar.module.scss";

const Sidebar = () => {
  return (
    <>
      <div className={Style.content}>
        <h2>Hi User</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-us">About us</a>
          </li>
          <li>
            <a href="/listing">Listing</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="register">Sign up</a>
          </li>
          <li>
            <a href="/add-your-bussiness">Add your bussiness</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
