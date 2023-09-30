import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

// images and css
import "./AboutMe.css";

const AboutMe = () => {
  const Name = ["P", "a", "n", "k", "a", "j", " ", "B", "h", "a", "t", "i"];

  const navigate = useNavigate();

  const handleContactClick = (event) => {
    //console.log("event ", event);
    const tabName = event.target.name;
    navigate(tabName);
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ display: { md: "none", xs: "flex" } }}>
          <div className="container-about">
            <img
              src={"/assets/AboutBackground.png"}
              className="container-about"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { md: "flex", xs: "none" } }}>
          <div className="container-about">
            <img
              src={"/assets/AboutBackground.png"}
              className="container-about"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="container-right">
            <div className="container-right-1">
              <Box
                className="heading-about"
                sx={{ alignItems: { xs: "center", md: "center" } }}
              >
                <Box className="name-heading" sx={{fontSize: {xs: "4rem", md: "5rem"}}}>Pankaj Bhati</Box>
                <div className="name-title">Software-Developer</div>
              </Box>
              {/* <Box className="image-container" sx={{display: {xs: "none", md: "flex"}}}>
              <img src={"/assets/pankaj_bhati.jpg"} className="image-attributes" />
            </Box> */}
            </div>
            <div className="container-right-2">
              <Box
                className="about-overview"
                sx={{ paddingTop: { xs: "0px" }, padding: "5rem", paddingLeft: "7rem", paddingRight: "7rem" }}
              >
                <p className="about-text-container">
                  Hello! I'm a full-stack developer based in Noida, Uttar
                  Pradesh. I graduated in Computer Engineering from Delhi
                  Technological University (formerly Delhi College of
                  Engineering) in 2021 with an 8.14 CGPA. Right after
                  graduation, I joined Indus Valley Partners and gained two
                  years of professional development experience.During my time at
                  university, I became passionate about emerging web
                  technologies, especially React and other frameworks. This
                  passion led me to specialize in web development, where I focus
                  on creating both beautiful and functional websites and
                  applications.
                  <br />
                  <br/>
                  I'm committed to continuous learning and growth, always eager
                  to stay ahead in this rapidly evolving field. As a full-stack
                  developer, I thrive on shaping innovative tech experiences and
                  contributing to the future of technology.
                </p>
                <Box className="about-button-container">
                <Button
                  name="Experience"
                  variant="contained"
                  className="contact-button"
                  onClick={(event) => handleContactClick(event)}
                >
                  Experience
                </Button>
                <Button
                  name="Projects"
                  variant="contained"
                  className="contact-button"
                  onClick={(event) => handleContactClick(event)}
                >
                Projects
                </Button>
                <Button
                  name="Contact"
                  variant="contained"
                  className="contact-button"
                  onClick={(event) => handleContactClick(event)}
                >
                  Contact Me
                </Button>
                </Box>
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
      {/* <div className="container-left">
          
        </div> */}

      {/* </div> */}
    </>
  );
};

export default AboutMe;
