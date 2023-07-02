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
    title: "Web Developer",
    description:
      "Web developer with skills in JavaScript, CSS, HTML, and implementing modern frameworks for developing attractive and interactive web applications.",
    icon: "bx:code-block",
    className: "bounce-element",
  },
  {
    title: "Cloud Engineer",
    description:
      "Cloud engineers skilled in designing, managing, and optimizing cloud infrastructure for scalable, secure, and high-performance business needs.",
    icon: "mdi:cloud-cog-outline",
    className: "bounce-element-reverse",
  },
  {
    title: "Front-end Developer",
    description:
      "Front-end developers skilled in user interface development use React frameworks and CSS frameworks such as Bootstrap or Tailwind CSS.",
    icon: "mdi:responsive",
    className: "bounce-element",
  },
  {
    title: "Full-stack Developer",
    description:
      "Fullstack developer with expertise in developing applications using the PHP framework, to provide comprehensive solutions on the back-end and front-end.",
    icon: "la:laptop-code",
    className: "bounce-element-reverse",
  },
];

export default function CardComponent() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi (dalam milidetik)
    });
  }, []);
  return (
    <div className="mt-11 flex justify-center flex-row flex-wrap">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="m-2 mx-2 w-4/5 sm:w-2/3 md:w-4/5 lg:w-[25rem]"
          sx={{
            backgroundColor: "rgba(19, 20, 45, 1)",
            border: "2px solid rgba(128, 90, 213, 0.5)",
            color: "rgb(168 85 247)",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow:
                "5px 5px 10px rgba(128, 90, 213, 0.5), -5px -5px 10px rgba(128, 90, 213, 0.5)",
            },
          }}
          data-aos="fade-up"
        >
          <CardActionArea
            sx={{
              paddingX: "10px",
              paddingY: "25px",
            }}
          >
            {/* <CardMedia component="img" height="140" alt={card.title} /> */}
            <CardContent>
              <Icon
                className={`m-1 ${card.className} `}
                icon={card.icon}
                width={"40px"}
              />
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "white",
                }}
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
