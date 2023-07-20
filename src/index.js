import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/index.css";
import NavbarComponent from "./pages/templates/Navbar";
import Footer from "./pages/templates/Footer";
import AboutMe from "./pages/AboutMe";
import MySkill from "./pages/MySkill";
import MyProject from "./pages/MyProject";
import ContactMe from "./pages/MyContact";
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
        <Route path="/MyProject" element={<MyProject />} />
        <Route path="/ContactMe" element={<ContactMe />} />
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
