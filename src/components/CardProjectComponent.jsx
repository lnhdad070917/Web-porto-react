import React, { useState, useEffect } from "react";
import "./../assets/card.css";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import gopic from "../assets/img/Gopic.png";
import maxim from "../assets/img/Redesign_Maxim.png";
import eduspace from "../assets/img/EduSpace.png";
import travelista from "../assets/img/travelista.png";

const cardData = [
  {
    image: gopic,
    title: "Gopic",
    description: "Studi Independent Experience",
    link: "#",
    position: "top-left",
  },
  {
    image: maxim,
    title: "Redesign Maxim",
    description: "Studi Independent Experience",
    link: "#",
    position: "top-right",
  },
  {
    image: travelista,
    title: "Travelista",
    description: "Student Project",
    link: "https://travelista.dreamit.my.id/user/index2.php",
    position: "bottom-left",
  },
  {
    image: eduspace,
    title: "Eduspace",
    description: "Studi Independent Experience",
    link: "#",
    position: "bottom-right",
  },
];

const handleClick = (e, link) => {
  e.preventDefault();
  window.open(link, "_blank");
};

const CardProject = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div data-aos="zoom-in-up">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`myCard ${hoveredCard === index ? "hovered" : ""} ${
            card.position
          } mt-5 md:mt-0`}
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={handleCardLeave}
        >
          <div className="innerCard">
            <div className="frontSide">
              <div className="card-image pt-4">
                <img src={card.image} alt="Card" />
              </div>
              <h2 className="title">{card.title}</h2>
              <p>{card.description}</p>
            </div>
            <div className="backSide p-7">
              <p className="lg:text-3xl text-md">{card.title}</p>
              <button
                className="hover:bg-transparent bg-violet-900 hover:text-purple-700 font-semibold text-purple-500 py-2 px-4 mx-2 border hover:border-purple-900 border-transparent rounded inline-flex items-center lg:text-md text-xs font-light"
                onClick={(e) => handleClick(e, card.link)}
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
        </div>
      ))}
    </div>
  );
};

export default CardProject;
