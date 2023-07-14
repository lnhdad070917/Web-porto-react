import React, { useEffect } from "react";
import "./../assets/myProject.css";
import AOS from "aos";
import "aos/dist/aos.css";
import mramanah from "./../assets/img/mramanah.png";
import tenderplus from "./../assets/img/tender.png";
import travelista from "./../assets/img/travelista.png";
import admin from "./../assets/img/admin.png";
import awanstore from "./../assets/img/awanstore.png";
import dreamit from "./../assets/img/dreamit.png";
import incraft from "./../assets/img/incraft.png";
import { Icon } from "@iconify/react";

export default function MyProject() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi (dalam milidetik)
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Projects = [
    {
      nama: "TenderPlus",
      foto: tenderplus,
      description:
        "internship as a full stack developer, and building the TenderPlus website (MSIB 3)",
      link: "https://tenderplus.id/",
      posisi: "Posisi",
    },
    {
      nama: "In-Craft (Cloud)",
      foto: incraft,
      description:
        "project of the Capstone group, on the implementation of Bangit 2023 as a cloud computing cohort (MSIB 4)",
      link: "#",
      posisi: "Posisi",
    },
    {
      nama: "Malik Rizki Amanah",
      foto: mramanah,
      description:
        "freelance worker at CV MR Amanah as a Full Stack Developer building main website selling books and journals.",
      link: "https://mramanah.web.id/",
      posisi: "Posisi",
    },
    {
      nama: "Dream IT",
      foto: dreamit,
      description:
        "personal project, to develop skills and improve understanding with laravel + react.",
      link: "https://dreamit.my.id/",
      posisi: "Posisi",
    },
    {
      nama: "Travelista",
      foto: travelista,
      description:
        "personal project, to increase understanding of CRUD in simple web creation.",
      link: "https://travelista.dreamit.my.id/user/index2.php",
      posisi: "Posisi",
    },
    {
      nama: "Admin Web",
      foto: admin,
      description:
        "personal project, to increase understanding of CRUD in simple web creation.",
      link: "https://admin.dreamit.my.id/",
      posisi: "Posisi",
    },
    {
      nama: "store Web",
      foto: awanstore,
      description:
        "final project, to fulfill course assignments in semester 4. and improve understanding of learning.",
      link: "https://store.dreamit.my.id/dashboard.php",
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
          className="text-center text-white text-3xl loader_title"
          data-aos="fade-up"
        >
          My &nbsp;
          <div className="pt-5">
            <span className="text-4xl">Project</span>
            <span className="text-4xl">Project</span>
          </div>
        </h2>
      </div>
      <div className="flex justify-center flex-wrap gap-4 pb-20">
        {Projects.map((data, i) => (
          <div className="card_custom_project" key={i} data-aos="fade-up">
            <div className="content">
              <img src={data.foto} alt="foto_project" />
              <p className="text-3xl">{data.nama}</p>
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
