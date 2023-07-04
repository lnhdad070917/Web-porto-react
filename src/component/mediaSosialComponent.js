import React from "react";
import SosialContent from "./sosialContentComponent";
import Education from "./educationComponent";

export default function MediaSosial() {
  return (
    <div className="py-11" style={{ background: "rgba(19, 30, 54, 255)" }}>
      <div className="p-4 md:p-0 md:flex md:justify-evenly">
        <div>
          <h2 className="text-4xl text-center pb-10 text-white">
            Media <span style={{ color: "rgb(168 85 247)" }}>Sosial</span>
          </h2>
          <SosialContent />
        </div>
        <div>
          <h2
            className="text-4xl text-center pb-10"
            style={{ color: "rgb(168 85 247)" }}
          >
            Education
          </h2>
          <Education />
        </div>
      </div>
    </div>
  );
}
