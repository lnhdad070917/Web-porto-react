import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const cardData = [
  {
    title: "Card 1",
    description: "Description for Card 1",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
  },
  {
    title: "Card 3",
    description: "Description for Card 3",
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
  },
];

export default function CardComponent() {
  return (
    <div className="flex justify-center flex-row flex-wrap">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="mt-11 mx-2 w-4/5 sm:w-2/3 md:w-4/5 lg:w-[25rem]"
        >
          <CardActionArea>
            {/* <CardMedia component="img" height="140" alt={card.title} /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
