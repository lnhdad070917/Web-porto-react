import React, { useEffect } from "react";
import shape from "./assets/img/shape.png";
import test from "./assets/img/test.png";
import { Typewriter } from "react-simple-typewriter";
import "typeface-lobster";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpinnLoader from "./components/SpinnLoaderComponent";
import CardComponent from "./components/CardComponent";
import CardProject from "./components/CardProjectComponent";
import MediaSosial from "./components/MediaSosialComponent";
import PengunjungWeb from "./components/CounterComponent";
import { useNavigate } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi (dalam milidetik)
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      {/* TOP */}
      <div
        className="relative h-full pt-20 pb-11"
        style={{ background: "rgba(19, 30, 54, 255)" }}
      >
        <div className="container mx-auto md:px-28 py-[5rem]">
          <div className="flex flex-col-reverse md:flex-row justify-evenly items-center z-10">
            {/* Text Top */}
            <PengunjungWeb />
            <div className="relative md:mt-0 mt-20 md:w-2/3 pl-5">
              <h1
                data-aos="fade-down-right"
                data-aos-duration="800"
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "0.5rem",
                  margin: "auto 0",
                  fontWeight: "normal",
                  color: "white",
                }}
              >
                Hallo, I'm{" "}
              </h1>
              <h1
                className="text-4xl font-bold"
                data-aos="fade-down-right"
                data-aos-duration="800"
                style={{ fontFamily: "Lobster, cursive", color: "#0eeae2" }}
              >
                Luthfiyyah Nurhasannah
              </h1>
              <h1
                style={{
                  paddingTop: "1rem",
                  margin: "auto 0",
                  fontWeight: "normal",
                  color: "white",
                  fontSize: "20px",
                }}
                data-aos="flip-up"
                data-aos-duration="800"
              >
                A{" "}
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
              </h1>
              <p
                className="text-white md:pr-0 pr-5 md:w-[95%] pt-2 tracking-wider text-justify"
                data-aos="slide-right"
                data-aos-duration="800"
              >
                &emsp;&emsp;I am a dedicated 7th-semester student pursuing a
                bachelor's degree at Universitas Pembangunan Nasional Yogyakarta
                (UPNVYK). Apart from excelling in academics, I actively
                participate in committee activities and serve as a laboratory
                assistant in the Informatics Department. My proficiency in
                fundamental programming skills algorithm, web, and mobile
                programming complements my passion for UI/UX Research & Design.
                I excel in research using design thinking methods and have
                gained valuable experience during my 5-month internship in UI/UX
                Research & Design with the Independent Campus Program, producing
                notable works. With a strong team spirit and a readiness to
                tackle new challenges, I am driven to create innovative
                solutions in this field.
              </p>
              <div className="mt-10 md:justify-start flex justify-center">
                <button
                  className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-violet-950 py-2 px-4 mx-2 border border-purple-700 hover:border-transparent rounded inline-flex items-center"
                  data-aos="fade-up"
                >
                  <Icon
                    icon="line-md:download-loop"
                    width="30"
                    className="pr-2"
                  />
                  Resume
                </button>
                <button
                  className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-violet-950 py-2 px-4 mx-2 border border-purple-700 hover:border-transparent rounded inline-flex items-center"
                  data-aos="fade-up"
                  onClick={() => navigate("/AboutMe")}
                >
                  <Icon
                    icon="mdi:about-circle-outline"
                    width="30"
                    className="pr-2"
                  />
                  About me
                </button>
              </div>
            </div>
            {/* Image/Illustasi Top */}
            <div
              className="relative flex"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              <img
                className="w-[20rem] lg:w-[48rem] animate-shake"
                src={shape}
                alt="Shape"
              />
              <img
                className="absolute inset-0 lg:w-[28rem] -top-20 animate-shake-reverse"
                src={test}
                alt="Test"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Expertise */}
      <div
        className="flex justify-center items-center"
        style={{ background: "rgba(19, 30, 54, 255)" }}
      >
        <div className="py-10">
          <h2 className="text-4xl text-white text-center" data-aos="fade-up">
            My <span style={{ color: "rgb(168 85 247)" }}>Expertise</span>
          </h2>
          <p
            className="text-center text-slate-500 text-xl pb-3"
            data-aos="fade-up"
          >
            from learn and experience
          </p>
          <SpinnLoader />
          <CardComponent />
        </div>
      </div>
      {/* Project */}
      <div
        className="h-full pt-14 pb-14 md:flex md:justify-around "
        style={{ background: "rgba(19, 30, 54, 255)" }}
      >
        <div className="flex justify-center items-center md:w-2/5 w-full">
          <div>
            <h2
              className="text-white text-4xl text-center"
              data-aos="fade-up-right"
            >
              My <span style={{ color: "rgb(168 85 247)" }}>Project</span>
            </h2>
            <p
              className="text-center text-slate-500 text-xl pb-2"
              data-aos="fade-up-right"
            >
              Personal, University, and Company
            </p>
            <SpinnLoader />
          </div>
        </div>
        <div className="w-full md:w-3/5 flex justify-center items-center">
          <div className="w-full lg:w-3/4 ">
            <CardProject />
            <div className="flex justify-center pt-5">
              <button
                className="hover:bg-transparent bg-purple-500 hover:text-purple-700 font-semibold text-violet-950 py-2 px-4 mx-2 border hover:border-purple-700 border-transparent rounded inline-flex items-center"
                onClick={() => navigate("/MyProject")}
              >
                <Icon
                  icon="fluent-mdl2:all-apps-mirrored"
                  width="30"
                  className="pr-2"
                />
                See all
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Media Sosial */}
      <MediaSosial />
    </div>
  );
}

export default App;
