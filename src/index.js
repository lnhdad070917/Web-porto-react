import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/index.css";
import NavbarComponent from "./page/template/navbar";
import Footer from "./page/template/Footer";
import AboutMe from "./page/aboutMe";
import MySkill from "./page/mySkill";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Root = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/MySkill" element={<MySkill />} />
        {/* Tambahkan rute lain untuk halaman lain di sini */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();
