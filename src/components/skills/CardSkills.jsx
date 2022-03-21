import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaAngular } from "react-icons/fa";

export default function CardSkills({ skill, img }) {
  return (
    <Card
      item
      sx={{
        minWidth: 375,
        minHeight: 375,
        background: "#1a2930",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {img}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          style={{ color: "white" }}
          fontFamily={"Josefin Sans"}
        >
          {skill.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
