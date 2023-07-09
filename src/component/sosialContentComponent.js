import React from "react";
import "../assets/sosial.css";
import { Icon } from "@iconify/react";

export default function SosialContent() {
  return (
    <div className="flex justify-center pb-20">
      <div className="main">
        <div className="up">
          <button className="card1">
            <Icon
              className="instagram w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]"
              icon="line-md:instagram"
            />
          </button>
          <button className="card2">
            <Icon
              className="linkedin w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]"
              icon="fa6-brands:linkedin"
            />
          </button>
        </div>
        <div className="down">
          <button className="card3">
            <Icon
              className="github w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]"
              icon="octicon:mark-github-16"
            />
          </button>
          <button className="card4">
            <Icon
              className="facebook w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]"
              icon="ps:facebook-alt"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
