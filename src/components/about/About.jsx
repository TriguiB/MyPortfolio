import { Typography, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./about.scss";
import { fontSize } from "@mui/system";

export default function About() {
  return (
    <div className="about" id="about">
      <Grid container align={"center"} spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h1">About me</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            I'm an ambitious software developer with a drive to learn everything
            and build great software...
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            I’m super passionate about development and technology. From a
            technical standpoint, I spend most of my time working with Java,
            NodeJS, React and Angular, and everyday, I am learning new things
            and improving on what I already know.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            Right now I am on the second year of studying for a license of
            management computing in the Faculty of Economics and Management of
            Sfax.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            style={{ overflowY: "hidden", color: "#f7ce3e" }}
          >
            Check out my Social Network{" "}
            <ArrowForwardIosIcon className="arrow" />
          </Typography>
          <Grid
            item
            xs={4}
            align={"right"}
            style={{ overflowY: "hidden", marginTop: "1%", width: "100%" }}
          >
            <div className="a">
              <a href="https://www.linkedin.com/in/brahim-trigui-b34454233/">
                <LinkedInIcon style={{ fontSize: "35px" }} />
              </a>
              <a href="https://www.facebook.com/brahim.trigui.8">
                <FacebookIcon style={{ fontSize: "35px" }} />
              </a>
              <a href="https://twitter.com/TriguiBrahim">
                <TwitterIcon style={{ fontSize: "35px" }} />
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
