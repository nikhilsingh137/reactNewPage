import React from "react";
import Header from "../common-component/Header";
import { RouterProvider } from "react-router-dom";
import router from "../Router";
import Footer from "../common-component/Footer";
import HomePage from "../page/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
