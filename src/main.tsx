import React from "react";
import ReactDOM from "react-dom/client";
import { getRouter } from "./router";
import { RouterProvider } from "@tanstack/react-router";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><RouterProvider router={getRouter()} /></React.StrictMode>,
);