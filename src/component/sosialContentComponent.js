import React from "react";
import "../assets/sosial.css";
import { Icon } from "@iconify/react";

export default function SosialContent() {
  return (
    <div className="flex justify-center pb-20">
      <div className="main">
        <div className="up">
          <button className="card1">
            <Icon className="instagram" icon="line-md:instagram" width="30" />
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
            <Icon className="facebook" icon="ps:facebook-alt" width="30" />
          </button>
        </div>
      </div>
    </div>
  );
}
