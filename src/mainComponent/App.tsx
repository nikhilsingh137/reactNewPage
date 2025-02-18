import React from "react";
import Header from "../common-component/Header";
import { RouterProvider } from "react-router-dom";
import router from "../Router";
import Footer from "../common-component/Footer";

const App = () => {
  const location = window.location.pathname === "/login";
  const location1 = window.location.pathname === "/register";
  const location2 = window.location.pathname === "/";

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
