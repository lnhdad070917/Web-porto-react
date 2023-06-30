import React, { useEffect } from "react";
import shape from "./assets/img/shape.png";
import test from "./assets/img/test.png";
import { Typewriter } from "react-simple-typewriter";
import "typeface-lobster";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpinnLoader from "./component/spinnLoader";
import CardComponent from "./component/cardComponent";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi (dalam milidetik)
    });
  }, []);
  return (
    <div>
      <div
        className="relative h-full pt-20 pb-11"
        style={{ background: "rgba(19, 30, 54, 255)" }}
      >
        <div className="container mx-auto px-28 py-[5rem]">
          <div className="flex justify-evenly items-center z-10">
            <div className="relative w-2/3 pl-5">
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
                Didik Adi Darmawan
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
              </h1>
              <p
                className="text-white w-[95%] pt-2 tracking-wider"
                data-aos="slide-right"
                data-aos-duration="800"
              >
                7th-semester student, actively involved in various student
                organizations and with a keen interest in programming. I am
                proficient in PHP, JavaScript, VueJS, ReactJS, and MySQL, and
                have practical experience as a Fullstack Developer in the IT
                industry.
              </p>
              <div className="mt-10">
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
            <div
              className="relative flex"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="800"
            >
              <img
                className="w-[12rem] lg:w-[48rem] animate-shake"
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
      <div
        className="flex justify-center items-center"
        style={{ background: "rgba(19, 30, 54, 255)" }}
      >
        <div className="py-10">
          <h2 className="text-4xl text-white text-center">
            My <span style={{ color: "rgb(168 85 247)" }}>Expertise</span>
          </h2>
          <p className="text-center text-purple-800 text-xl pb-3">
            from learn and experience
          </p>
          <SpinnLoader />
          <CardComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
