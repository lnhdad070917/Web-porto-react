import React from "react";
import "./../assets/mySkill.css";
import { Icon } from "@iconify/react";

export default function MySkill() {
  return (
    <div
      className="lg:mt-0 md:mt-16 flex items-center justify-center md:h-full lg:h-full"
      style={{
        background:
          "linear-gradient(120deg,rgba(19, 30, 54, 255) 25%,rgba(67, 38, 100, 255) 100%)",
      }}
    >
      <div className="lg:w-3/5 mt-20">
        <h2 className="text-center text-white text-4xl">
          <span style={{ color: "rgb(168 85 247)" }}>My</span> Skill
        </h2>
        <hr
          className="w-[30%] bg-white"
          style={{ marginBottom: "10px", marginLeft: "35%", marginTop: "5px" }}
        />
        <h2 className="pb-5 text-white text-xl lg:pl-0 pl-5">Programming :</h2>
        <div className="flex justify-center flex-wrap">
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:c-plusplus" />
            <span>C++</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:php" />
            <span>PHP</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="skill-icons:html" />
            <span>HTML</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="skill-icons:css" />
            <span>CSS</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="skill-icons:javascript" />
            <span>JavaScript</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:mysql" />
            <span>MySQL</span>
          </button>
        </div>
        <h2 className="pb-5 text-white text-xl lg:pl-0 pl-5">Frameworks :</h2>
        <div className="flex justify-center flex-wrap">
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:laravel" />
            <span>Laravel</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:codeigniter-icon" />
            <span>Codeigniter3</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon
              className="svg"
              width={35}
              icon="skill-icons:expressjs-light"
            />
            <span>Express Js</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="devicon:react" />
            <span>React Js</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:flutter" />
            <span>Flutter</span>
          </button>
        </div>
        <h2 className="pb-5 text-white text-xl lg:pl-0 pl-5">Design UI :</h2>
        <div className="flex justify-center flex-wrap">
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="simple-icons:mui" />
            <span>Material-UI</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:bootstrap" />
            <span>Bootstrap</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:tailwindcss-icon" />
            <span>Tailwind</span>
          </button>
        </div>
        <h2 className="pb-5 text-white text-xl lg:pl-0 pl-5">Other :</h2>
        <div className="flex justify-center flex-wrap">
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:nodejs" />
            <span>Node.js</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="logos:google-cloud" />
            <span>Google Cloud</span>
          </button>
          <button className="button_custom mx-1 mb-3">
            <Icon className="svg" width={35} icon="mdi:api" />
            <span>Restful API</span>
          </button>
        </div>
      </div>
    </div>
  );
}
