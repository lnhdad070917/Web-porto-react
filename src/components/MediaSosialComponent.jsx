import React, { useEffect } from "react";
import SosialContent from "./SosialContentComponent";
import FormComponent from "./FormComponent";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MediaSosial() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="py-11" style={{ background: "rgba(19, 30, 54, 1)" }}>
      <div className="p-4 md:p-0 md:flex">
        <div className="md:w-1/2 p-5 md:p-10" data-aos="fade-up">
          <h2 className="text-4xl text-center pb-10 text-white">
            <span style={{ color: "rgb(168, 85, 247)" }}>Send</span> Message
          </h2>
          <FormComponent />
        </div>
        <div className="md:w-1/2 p-5 md:p-10 md:mt-0 mt-10" data-aos="fade-up">
          <h2 className="text-4xl text-center pb-10 text-white">
            Media <span style={{ color: "rgb(168, 85, 247)" }}>Sosial</span>
          </h2>
          <div className="h-full flex items-center justify-center md:pb-36">
            <SosialContent />
          </div>
        </div>
      </div>
    </div>
  );
}
