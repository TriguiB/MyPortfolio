import "slick-carousel/slick/slick.css";
import "./slider.scss";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { data } from "../../data/data";
import { Grid, Typography } from "@mui/material";
import CardSkills from "./CardSkills";
import { padding } from "@mui/system";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,

      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      speed: 4000,
      rows: 1,
      autoplaySpeed: 3000,
      cssEase: "linear",
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider
          {...settings}
          style={{
            padding: "0",
            margin: "0",
          }}
        >
          {data.map((skill) => (
            <CardSkills key={skill.title} skill={skill} img={skill.image} />
          ))}
        </Slider>
      </>
    );
  }
}
