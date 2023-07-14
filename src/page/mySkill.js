import React, { useEffect } from "react";
import "./../assets/mySkill.css";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MySkill() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi (dalam milidetik)
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const programming = [
    {
      nama: "C++",
      icon: "logos:c-plusplus",
    },
    {
      nama: "PHP",
      icon: "logos:php",
    },
    {
      nama: "HTML",
      icon: "skill-icons:html",
    },
    {
      nama: "CSS",
      icon: "skill-icons:css",
    },
    {
      nama: "Javascript",
      icon: "skill-icons:javascript",
    },
    {
      nama: "MySQL",
      icon: "logos:mysql",
    },
  ];

  const Frameworks = [
    { nama: "Laravel", icon: "logos:laravel" },
    { nama: "Codeigniter3", icon: "logos:codeigniter-icon" },
    { nama: "Express Js", icon: "skill-icons:expressjs-light" },
    { nama: "React Js", icon: "devicon:react" },
    { nama: "Flutter", icon: "logos:flutter" },
  ];

  const DesginUI = [
    { nama: "Material UI", icon: "simple-icons:mui" },
    { nama: "Tailwind", icon: "logos:bootstrap" },
    { nama: "Bootstrap", icon: "logos:tailwindcss-icon" },
  ];

  const Other = [
    { nama: "Node.js", icon: "logos:nodejs" },
    { nama: "Google Cloud", icon: "logos:google-cloud" },
    { nama: "Restful API", icon: "mdi:api" },
    { nama: "GitHub", icon: "icon-park:github" },
    { nama: "Firebase", icon: "logos:firebase" },
  ];

  return (
    <div
      className="lg:mt-0 md:mt-16 flex items-center justify-center md:h-full lg:h-full"
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
          Programming :
        </h2>
        <div className="flex justify-center flex-wrap">
          {programming.map((data, i) => (
            <button
              className="button_custom mx-1 mb-3"
              key={i}
              data-aos="fade-up"
            >
              <Icon className="svg" width={35} icon={data.icon} />
              <span>{data.nama}</span>
            </button>
          ))}
        </div>
        <h2 className="pb-5 text-white text-xl lg:pl-0 pl-5" data-aos="fade-up">
          Framework :
        </h2>
        <div className="flex justify-center flex-wrap">
          {Frameworks.map((data, i) => (
            <button
              className="button_custom mx-1 mb-3"
              key={i}
              data-aos="fade-up"
            >
              <Icon className="svg" width={35} icon={data.icon} />
              <span>{data.nama}</span>
            </button>
          ))}
        </div>
        <h2 className="pb-5 text-white text-xl lg:pl-0 pl-5" data-aos="fade-up">
          Design UI :
        </h2>
        <div className="flex justify-center flex-wrap">
          {DesginUI.map((data, i) => (
            <button
              className="button_custom mx-1 mb-3"
              key={i}
              data-aos="fade-up"
            >
              <Icon className="svg" width={35} icon={data.icon} />
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
              <Icon className="svg" width={35} icon={data.icon} />
              <span>{data.nama}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
