import React from "react";
import Header from "../common-component/Header";
import Footer from "../common-component/Footer";
import { RouterProvider } from "react-router";
import router from "../Router";

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
