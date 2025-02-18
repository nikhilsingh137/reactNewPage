import React, { useState } from "react";
import Style from "../style/newheader.module.scss";
import Logo from "../172802-removebg-preview.png";
import { useEffect } from "react";

const NewHeader = () => {
  const [showNav, setShowNav] = useState(false);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const handleLine = () => {
      const scrolled = window.scrollY;
      const lineHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const line = (scrolled / lineHeight) * 100;
      setLine(line);
    };
    window.addEventListener("scroll", handleLine);
    return () => {
      window.removeEventListener("scroll", handleLine);
    };
  }, [line]);
  return (
    <div className={`${Style.container}`}>
      <div className={Style.wrapper}>
        <div className={Style.header}>
          <div className={Style.logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={Style.seachBox}>
            <form>
              <div className={Style.box}>
                <input type="text" placeholder="Search Businesses" />
              </div>
              <div className={Style.box}>
                <i className="fa-solid fa-location-dot"></i>
                <input type="text" placeholder="Location" />
              </div>
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className={Style.Icon}>
            <h2 onClick={() => setShowNav(!showNav)}> ☰</h2>
            <div className={`${Style.navbar} ${showNav ? Style.show : ""}`}>
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
                  <a href="/register">SignUp</a>
                </li>
                <li>
                  <a href="/dashboard/new">Add your bussiness</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.borderLine} style={{ width: `${line}%` }}></div>
    </div>
  );
};

export default NewHeader;
