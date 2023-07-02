import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import image_project_1 from "../assets/img/test.png";

const cardDataProject = [
  {
    title: "TenderPlus",
    description: "Full-Stack Developer",
    badge: "badge 1",
    className: "card",
    image: image_project_1,
  },
  {
    title: "title 2",
    description: "description 2",
    badge: "badge 2",
    className: "card",
    image: image_project_1,
  },
  {
    title: "title 3",
    description: "description 3",
    badge: "badge 3",
    className: "card",
    image: image_project_1,
  },
  {
    title: "title 4",
    description: "description 4",
    badge: "badge 4",
    className: "card",
    image: image_project_1,
  },
];

export default function CardProject() {
  return (
    <div className="flex justify-center flex-row flex-wrap">
      {cardDataProject.map((card, index) => (
        <Card
          key={index}
          className="m-1 w-[350px]"
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
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={card.image}
              alt="Image project"
              sx={{ height: "100px", objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
