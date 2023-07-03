import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import NavbarComponent from "./page/template/navbar";
import reportWebVitals from "./reportWebVitals";
import Footer from "./page/template/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarComponent />
    <App />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
