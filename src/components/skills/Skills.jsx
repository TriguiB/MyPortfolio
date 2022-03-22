import { Grid, Typography } from "@mui/material";
import React from "react";
import SliderSkills from "./SliderSkills";
import "./skills.scss";
import { data } from "../../data/data";
import CardSkills from "./CardSkills";
export default function Skills() {
  return (
    <div className="skills" id="skills">
      <Grid container>
        <Grid item xs={12} align={"center"}>
          <Typography variant="h2">Skills & Technologies</Typography>
        </Grid>
        <Grid item xs={10} align={"right"}>
          <Typography variant="h5">
            These are some of the things that I know ...
          </Typography>
        </Grid>

        <Grid item xs={12} style={{ marginTop: "60px", marginBottom: "50px" }}>
          <SliderSkills />
        </Grid>
      </Grid>
    </div>
  );
}
