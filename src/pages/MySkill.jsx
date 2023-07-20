import React, { useEffect } from "react";
import "./../assets/mySkill.css";
// import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MySkill() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const HardSkill = [
    {
      nama: "Design Thinking",
    },
    {
      nama: "Research",
    },
    {
      nama: "Information Achitecture",
    },
    {
      nama: "Interaction Design",
    },
    {
      nama: "Usability Testing",
    },
  ];

  const SoftSkill = [
    { nama: "Communication Skill", icon: "logos:laravel" },
    { nama: "Teamwork", icon: "logos:codeigniter-icon" },
    { nama: "Problem Sovling", icon: "skill-icons:expressjs-light" },
    { nama: "Critical Thinking", icon: "devicon:react" },
    { nama: "Leadership", icon: "logos:flutter" },
    { nama: "Time Management", icon: "logos:flutter" },
    { nama: "Decision Making", icon: "logos:flutter" },
  ];

  const Other = [
    { nama: "Figma", icon: "logos:nodejs" },
    { nama: "Canva", icon: "logos:nodejs" },
    { nama: "Maze", icon: "logos:nodejs" },
    { nama: "Photoshop", icon: "logos:nodejs" },
    { nama: "Microsoft Office", icon: "logos:nodejs" },
    { nama: "Discord", icon: "logos:nodejs" },
    { nama: "GitHub", icon: "icon-park:github" },
  ];

  return (
    <div
      className="lg:mt-0 md:mt-16 flex items-center justify-center md:h-full lg:h-screen"
      style={{
        background:
          "linear-gradient(120deg,rgba(19, 30, 54, 255) 25%,rgba(67, 38, 100, 255) 100%)",
      }}
    >
      <div className="lg:w-3/5 mt-20 mb-20">
        <h2 className="text-center text-white text-4xl" data-aos="fade-up">
          <span style={{ color: "rgb(168 85 247)" }}>My</span> Skill
        </h2>
        <hr
          className="w-[30%] bg-white"
          style={{ marginBottom: "10px", marginLeft: "35%", marginTop: "5px" }}
          data-aos="fade-up"
        />
        <h2 className="pb-5 text-white text-xl lg:pl-0 pl-5" data-aos="fade-up">
          Hard Skill :
        </h2>
        <div className="flex justify-center flex-wrap">
          {HardSkill.map((data, i) => (
            <button
              className="button_custom mx-1 mb-3"
              key={i}
              data-aos="fade-up"
            >
              {/* <Icon className="svg" width={35} icon={data.icon} /> */}
              <span>{data.nama}</span>
            </button>
          ))}
        </div>
        <h2 className="pb-5 text-white text-xl lg:pl-0 pl-5" data-aos="fade-up">
          Soft Skill :
        </h2>
        <div className="flex justify-center flex-wrap">
          {SoftSkill.map((data, i) => (
            <button
              className="button_custom mx-1 mb-3"
              key={i}
              data-aos="fade-up"
            >
              {/* <Icon className="svg" width={35} icon={data.icon} /> */}
              <span>{data.nama}</span>
            </button>
          ))}
        </div>
        <h2 className="pb-5 text-white text-xl lg:pl-0 pl-5" data-aos="fade-up">
          Other :
        </h2>
        <div className="flex justify-center flex-wrap">
          {Other.map((data, i) => (
            <button
              className="button_custom mx-1 mb-3"
              key={i}
              data-aos="fade-up"
            >
              {/* <Icon className="svg" width={35} icon={data.icon} /> */}
              <span>{data.nama}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
