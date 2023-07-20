import React, { useEffect } from "react";
import "./../assets/myProject.css";
import AOS from "aos";
import "aos/dist/aos.css";
import mramanah from "./../assets/img/mramanah.png";
import tenderplus from "./../assets/img/tender.png";
import travelista from "./../assets/img/travelista.png";
import dreamit from "./../assets/img/dreamit.png";
import incraft from "./../assets/img/incraft.png";
import gopic from "../assets/img/Gopic.png";
import maxim from "../assets/img/Redesign_Maxim.png";
import eduspace from "../assets/img/EduSpace.png";
import { Icon } from "@iconify/react";

export default function MyProject() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Projects = [
    {
      nama: "Gopic",
      foto: gopic,
      link: "#",
      posisi: "Posisi",
    },
    {
      nama: "Redesign Maxim",
      foto: maxim,
      link: "#",
      posisi: "Posisi",
    },
    {
      nama: "Eduspace",
      foto: eduspace,
      link: "#",
      posisi: "Posisi",
    },
    {
      nama: "Dream IT",
      foto: dreamit,
      link: "https://dreamit.my.id/",
      posisi: "Posisi",
    },
    {
      nama: "Travelista",
      foto: travelista,
      link: "https://travelista.dreamit.my.id/user/index2.php",
      posisi: "Posisi",
    },
    {
      nama: "MR Amanah",
      foto: mramanah,
      link: "https://mramanah.web.id/",
      posisi: "Posisi",
    },
  ];
  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };
  return (
    <div
      className="h-full"
      style={{
        background:
          "linear-gradient(120deg,rgba(19, 30, 54, 255) 25%,rgba(67, 38, 100, 255) 100%)",
      }}
    >
      <div className="pt-32"></div>
      <div className="mb-10">
        <h2
          className="text-center text-white text-[60px] loader_title"
          data-aos="fade-up"
        >
          My &nbsp;
          <div className="pt-7">
            <span className="text-[60px]">Project</span>
            <span className="text-[60px]">Project</span>
          </div>
        </h2>
      </div>
      <div className="flex justify-center flex-wrap gap-4 pb-20">
        {Projects.map((data, i) => (
          <div className="card_custom_project" key={i} data-aos="fade-up">
            <div className="content">
              <img src={data.foto} alt="foto_project" />
              <p className="text-2xl">{data.nama}</p>
              <p className="para">{data.description}</p>
              <button
                className="btn flex items-center"
                onClick={(e) => {
                  handleClick(e, data.link);
                }}
              >
                <Icon
                  icon="line-md:external-link"
                  width="30"
                  className="pr-2"
                />
                See project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
