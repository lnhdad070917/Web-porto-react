import React, { useEffect } from "react";
import fotoLuthfi from "../assets/img/luthfi.jpeg";
import { Typewriter } from "react-simple-typewriter";
import "../assets/aboutMe.css";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const media_sosial = [
    {
      className: "instagram_about",
      link: "https://instagram.com/luthfiyyahnh_?igshid=ZDc4ODBmNjlmNQ==",
      icon: "line-md:instagram",
    },
    {
      className: "linkedin_about",
      link: "https://www.linkedin.com/in/luthfiyyah-n-h",
      icon: "fa6-brands:linkedin",
    },
    {
      className: "facebook_about",
      link: "https://m.facebook.com/dhefhiyyach.dhefhiyyach.3/",
      icon: "ps:facebook-alt",
    },
    {
      className: "github_about",
      link: "https://github.com/luthfiyyahnh",
      icon: "octicon:mark-github-16",
    },
    {
      className: "whatsapp_about",
      link: "https://wa.me/6285848265261",
      icon: "simple-icons:whatsapp",
    },
  ];

  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div
      className="lg:mt-0 md:mt-10 md:pb-20 md:mt-[-65px] lg:flex items-center justify-center md:h-full lg:h-screen"
      style={{
        background:
          "linear-gradient(120deg,rgba(19, 30, 54, 255) 25%,rgba(67, 38, 100, 255) 100%)",
      }}
    >
      <div
        className="lg:w-1/2 flex justify-center items-center"
        data-aos="fade-up-left"
      >
        <div className="absolute">
          <div className="loader">
            <div className="loader_cube loader_cube--color"></div>
            <div className="loader_cube loader_cube--glowing"></div>
          </div>
        </div>
        <img
          src={fotoLuthfi}
          className="w-[150px] md:w-[250px] rounded-full z-10 absolute"
          alt="fotoLuthfi"
        />
        <div className="mt-[400px] md:mt-[530px] z-10 flex justify-center flex-wrap">
          {media_sosial.map((data, index) => (
            <button
              key={index}
              className={`button m-2 ${data.className}`}
              onClick={(e) => {
                handleClick(e, data.link);
              }}
            >
              <Icon
                icon={data.icon}
                className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 z-10 p-5" data-aos="fade-up-right">
        <h2 className="text-white text-2xl pb-5">
          <span style={{ color: "rgb(168 85 247)" }}>About</span> Me
          <hr className="w-[30%] bg-white" />
        </h2>
        <p className="text-white text-2xl md:text-4xl pb-1">
          I'm Luthfiyyah Nurhasannah
        </p>
        <p className="text-white text-md md:text-xl pb-3">
          As a{" "}
          <span style={{ color: "rgb(168 85 247)", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "UI/UX Research & Design",
                "UX Researcher",
                "Web Designer",
                "Mobile App Designer",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />{" "}
          </span>
        </p>
        <p className="text-white text-sm md:text-md pb-20 md:pr-10 md:p-0 text-justify">
          &emsp;&emsp;I am a dedicated 7th-semester student pursuing a
          bachelor's degree at Universitas Pembangunan Nasional Yogyakarta
          (UPNVYK). Apart from excelling in academics, I actively participate in
          committee activities and serve as a laboratory assistant in the
          Informatics Department. My proficiency in fundamental programming
          skills algorithm, web, and mobile programming complements my passion
          for UI/UX Research & Design. I excel in research using design thinking
          methods and have gained valuable experience during my 5-month
          internship in UI/UX Research & Design with the Independent Campus
          Program, producing notable works. With a strong team spirit and a
          readiness to tackle new challenges, I am driven to create innovative
          solutions in this field.
        </p>
      </div>
    </div>
  );
}
