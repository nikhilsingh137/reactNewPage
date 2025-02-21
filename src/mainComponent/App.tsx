import React from "react";
import Header from "../common-component/Header";
import { RouterProvider } from "react-router-dom";
import router from "../Router";
import Footer from "../common-component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
