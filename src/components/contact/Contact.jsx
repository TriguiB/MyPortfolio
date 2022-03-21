import { Grid, TextField, Typography } from "@mui/material";
import { IconName } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import InputAdornment from "@mui/material/InputAdornment";
import "./contact.scss";

import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@mui/material";
const HandleSubmit = (e) => {};
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <Grid align={"center"} style={{ marginTop: "70px" }}>
        <Grid item xs={12}>
          <Typography variant="h3">Contact Me.</Typography>
        </Grid>
      </Grid>
      <form
        action="https://formsubmit.co/19ee41c2b3849da8e8e56e79dc4c982d"
        method="POST"
        onSubmit={HandleSubmit}
      >
        <Grid align={"center"} style={{ marginTop: "40px" }}>
          <Grid item xs={12}>
            <TextField
              sx={{ width: 400, marginBottom: "15px" }}
              required
              id="outlined-basic"
              label="Name"
              variant="filled"
              type="text"
              name="name"
              color="primary"
              InputLabelProps={{
                style: { color: "#fff", fontSize: "20px" },
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "15px" }}>
            <TextField
              sx={{ width: 400 }}
              id="outlined-basic"
              type="email"
              label="Email"
              variant="filled"
              color="primary"
              name="email"
              InputLabelProps={{
                style: { color: "#fff", fontSize: "20px" },
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="text"
              id="outlined-basic"
              label="Note"
              variant="filled"
              rows={6}
              multiline
              sx={{ width: 400 }}
              color="primary"
              InputLabelProps={{
                style: {
                  color: "#fff",
                  marginBottom: "15px",
                  fontSize: "20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ width: "100%", marginTop: "10px" }}>
            <Button
              sx={{ width: 400 }}
              variant="contained"
              type="submit"
              color="primary"
            >
              Send
              <RiMailSendLine
                style={{ marginLeft: "10px", fontSize: "20px" }}
              />
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
