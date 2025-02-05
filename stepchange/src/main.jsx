import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import RouterConfig from "./Router/router.jsx"; // Import updated router

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterConfig /> {/* Now using HashRouter from router.js */}
  </React.StrictMode>
);
