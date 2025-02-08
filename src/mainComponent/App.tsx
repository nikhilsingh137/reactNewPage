import React from "react";
import Header from "../common-component/Header";
import { RouterProvider } from "react-router-dom";
import router from "../Router";
import Footer from "../common-component/Footer";
import NewHeader from "../common-component/NewHeader";

const App = () => {
  const location = window.location.pathname === "/login";
  const location1 = window.location.pathname === "/register";
  const location2 = window.location.pathname === "/";

  return (
    <>
      {!location && !location1 && (location2 ? <Header /> : <NewHeader />)}
      <RouterProvider router={router} />
      {!location && !location1 && <Footer />}
    </>
  );
};

export default App;
