import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
// import "antd/dist/reset.css";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
