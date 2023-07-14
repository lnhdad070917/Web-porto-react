import React, { useState } from "react";
import "./../assets/card.css";
import { Icon } from "@iconify/react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import tenderplus from "../assets/img/tender.png";
import cvmramanah from "../assets/img/mramanah.png";
import travelista from "../assets/img/travelista.png";
import dreamit from "../assets/img/dreamit.png";

const cardData = [
  {
    image: tenderplus,
    title: "TenderPlus",
    description: "Internship Experience",
    backside_description:
      "internship experience at Beecons for 5 months as a Full-Stack Developer, building a tenderplus platform.",
    link: "https://tenderplus.id",
    position: "top-left",
  },
  {
    image: cvmramanah,
    title: "CV MRAmanah",
    description: "Freelance Exprerience",
    backside_description:
      "freelance experience at CV Malik Rizki Amanah as a Web Developer, building the main web or selling books.",
    link: "https://mramanah.web.id/",
    position: "top-right",
  },
  {
    image: travelista,
    title: "Travelista",
    description: "Student Project",
    backside_description:
      "project carried out to fulfill the final lecture assignment in a related subject.",
    link: "https://travelista.dreamit.my.id/user/index2.php",
    position: "bottom-left",
  },
  {
    image: dreamit,
    title: "Dream IT",
    description: "Personal Project",
    backside_description:
      "personal projects to fill spare time, and to increase knowledge and gain experience.",
    link: "https://dreamit.my.id/",
    position: "bottom-right",
  },
];

const handleClick = (e, link) => {
  e.preventDefault();
  window.open(link, "_blank");
};

const CardProjec = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

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
              <p className="lg:text-md text-sm font-light">
                {card.backside_description}
              </p>
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

export default CardProjec;
