import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./../assets/style.css";
const SpinnLoader = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="loading-spinner" data-aos="fade-up">
      <div className="loading-spinner-inner">
        <div className="loading-spinner-circle"></div>
        <div className="loading-spinner-circle"></div>
        <div className="loading-spinner-circle"></div>
        <div className="loading-spinner-circle"></div>
        <div className="loading-spinner-circle"></div>
        <div className="loading-spinner-circle"></div>
        <div className="loading-spinner-circle"></div>
        <div className="loading-spinner-circle"></div>
        <div className="loading-spinner-circle"></div>
        <div className="loading-spinner-circle"></div>
      </div>
    </div>
  );
};

export default SpinnLoader;
