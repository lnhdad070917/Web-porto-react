import React from "react";
import "./../assets/style.css";
const SpinnLoader = () => {
  return (
    <div className="loading-spinner">
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
