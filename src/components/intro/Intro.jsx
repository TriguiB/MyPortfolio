import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["HTML", "CSS", "JS", "C#", "PHP", "JAVA"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/image.png"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <Typography variant="h2">Hi there, I'am </Typography>
          <Typography variant="h1">Trigui Brahim </Typography>
          <Typography variant="h5">
            Software Developper <span ref={textRef}></span>
          </Typography>
          <div className="icon">
            <a href="#about">
              <KeyboardArrowDownIcon style={{ fontSize: 100 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
