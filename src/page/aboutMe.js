import React from "react";
import fotoDidik from "../assets/img/didik.jpg";
import { Typewriter } from "react-simple-typewriter";
import "../assets/aboutMe.css";
import { Icon } from "@iconify/react";

export default function AboutMe() {
  return (
    <div
      className="lg:mt-0 md:mt-10 md:pb-20 md:mt-[-65px] lg:flex items-center justify-center md:h-full lg:h-screen"
      style={{
        background:
          "linear-gradient(120deg,rgba(19, 30, 54, 255) 25%,rgba(67, 38, 100, 255) 100%)",
      }}
    >
      <div className="lg:w-1/2 flex justify-center items-center">
        <div className="absolute">
          <div className="loader">
            <div className="loader_cube loader_cube--color"></div>
            <div className="loader_cube loader_cube--glowing"></div>
          </div>
        </div>
        <img
          src={fotoDidik}
          className="w-[150px] md:w-[250px] rounded-full z-10 absolute"
          alt="fotoDidik"
        />
        <div className="mt-[400px] md:mt-[530px] z-10 flex justify-center flex-wrap">
          <button className="button m-2 instagram_about">
            <Icon
              icon="line-md:instagram"
              className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
            />
          </button>
          <button className="button m-2 linkedin_about">
            <Icon
              icon="fa6-brands:linkedin"
              className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
            />
          </button>
          <button className="button m-2 facebook_about">
            <Icon
              icon="ps:facebook-alt"
              className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
            />
          </button>
          <button className="button m-2 github_about">
            <Icon
              icon="octicon:mark-github-16"
              className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
            />
          </button>
          <button className="button m-2 whatsapp_about">
            <Icon
              icon="simple-icons:whatsapp"
              className="md:w-[40px] md:h-[40px] w-[20px] h-[20px]"
            />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 z-10 p-5">
        <h2 className="text-white text-2xl pb-5">
          <span style={{ color: "rgb(168 85 247)" }}>About</span> Me
          <hr className="w-[30%] bg-white" />
        </h2>
        <p className="text-white text-2xl md:text-4xl pb-1">
          I'm Didik Adi Darmawan
        </p>
        <p className="text-white text-md md:text-xl pb-3">
          As a{" "}
          <span style={{ color: "rgb(168 85 247)", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Web Developer",
                "Cloud Engineer",
                "Full-stack Developer",
                "Front-end Developer",
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
          &emsp;&emsp;I have an interest in programming and enjoy contributing
          to the development of technology applications and solutions. I am
          proficient in PHP, JavaScript, CSS, VueJS, ReactJS, Express.js,
          Node.js, and MySQL, and have gained practical experience as a
          Fullstack Developer in the IT industry. Additionally, I've studied PHP
          frameworks like Codeigniter and Laravel. I am passionate in a teamwork
          environment and always up for new challenges.
        </p>
      </div>
    </div>
  );
}
