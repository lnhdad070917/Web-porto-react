import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Icon } from "@iconify/react";
import "./../assets/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    title: "UI/UX Research & Design",
    description:
      "combines attractive UI and satisfying UX. Research for optimal design decisions. Prioritizes usability and user satisfaction.",
    icon: "carbon:gui",
    className: "bounce-element",
  },
  {
    title: "UX Researcher",
    description:
      "They conduct research to understand the needs and preferences of potential users, aiding in informed design decisions.",
    icon: "ri:user-search-line",
    className: "bounce-element-reverse",
  },
  {
    title: "Web Designer",
    description:
      "Web Designers focus on the design and overall appearance of websites to create visually appealing and responsive experiences.",
    icon: "carbon:application-web",
    className: "bounce-element",
  },
  {
    title: "Mobile App Designer",
    description:
      "Mobile App Designers craft responsive and intuitive user interfaces for mobile applications to enhance user interactions and satisfaction.",
    icon: "tabler:device-mobile",
    className: "bounce-element-reverse",
  },
];

export default function CardComponent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const cardStyles = {
    backgroundColor: "rgba(19, 20, 45, 1)",
    border: "2px solid rgba(128, 90, 213, 0.5)",
    color: "rgb(168 85 247)",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow:
        "5px 5px 10px rgba(128, 90, 213, 0.5), -5px -5px 10px rgba(128, 90, 213, 0.5)",
    },
  };

  return (
    <div className="mt-11 flex justify-center flex-row flex-wrap">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="m-2 mx-2 w-full md:w-1/2 lg:w-1/3"
          sx={cardStyles}
          data-aos="fade-up"
        >
          <CardActionArea sx={{ paddingX: "10px", paddingY: "25px" }}>
            <CardContent>
              <Icon
                className={`m-1 ${card.className}`}
                icon={card.icon}
                width={40}
                height={40}
              />
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
