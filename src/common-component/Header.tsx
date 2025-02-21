import React, { useEffect, useState } from "react";
import Style from "../style/header.module.scss";
import StickyBox from "react-sticky-box";
import Logo from "../172802-removebg-preview.png";
import Sidebar from "./Sidebar";

const Header = () => {
  const [backcolor, setBackColor] = useState(false);
  const [isOpen, setisOpen] = useState(false);
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

  useEffect(() => {
    const handleColor = () => {
      const scrolled = window.scrollY;
      setBackColor(scrolled > 100);
    };

    window.addEventListener("scroll", handleColor);
    return () => {
      window.removeEventListener("scroll", handleColor);
    };
  }, []);

  const handleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      if (isOpen) {
        sidebar.style.width = "0px";
      } else {
        sidebar.style.width = "250px";
      }
    }
    setisOpen(!isOpen);
  };
  return (
    <>
      <StickyBox style={{ zIndex: 9 }}>
        <div
          className={`${Style.container} ${backcolor ? Style.stickyBack : ""} 
          `}
        >
          <div className={Style.sidebar} id="sidebar">
            <Sidebar />
          </div>
          <div className={Style.wrapper}>
            <div className={Style.header}>
              <div className={Style.logo}>
                <img src={Logo} alt="" />
              </div>
              <div className={Style.openNavbar} onClick={handleSidebar}>
                {isOpen ? "X" : "☰"}
              </div>
              <div className={Style.navbar}>
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
          <div className={Style.borderLine} style={{ width: `${line}%` }}></div>
        </div>
      </StickyBox>
    </>
  );
};

export default Header;
