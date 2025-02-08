import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./common-component/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
