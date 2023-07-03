import React from "react";
import "../assets/sosial.css";
import { Icon } from "@iconify/react";

export default function SosialContent() {
  return (
    <div>
      <div className="main">
        <div className="up">
          <button className="card1">
            <Icon className="instagram" icon="line-md:instagram" width="30px" />
          </button>
          <button className="card2">
            <Icon className="linkedin" icon="fa6-brands:linkedin" width="26" />
          </button>
        </div>
        <div className="down">
          <button className="card3">
            <Icon className="github" icon="octicon:mark-github-16" width="30" />
          </button>
          <button className="card4">
            <h1>icon</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
