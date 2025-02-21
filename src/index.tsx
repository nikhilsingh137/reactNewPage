import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./mainComponent/App";
import FormPost from "./FormPost";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <FormPost />
    {/* <Login />
    <ChangePassword />
    <LogOut /> */}
  </React.StrictMode>
);
