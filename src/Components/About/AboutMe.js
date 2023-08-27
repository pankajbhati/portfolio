import React from "react";
import {Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// images and css
// import pankajBhati from "../../assets/pankaj_bhati.jpg";
// import AboutIllustration from "/";
import "./AboutMe.css";

const AboutMe = () => {
  const Name = ["P", "a", "n", "k", "a", "j", " ", "B", "h", "a", "t", "i"];
  return (
    <>
      
        <Grid container>
          <Grid item xs={12} md={6} sx={{display: {md: "none", xs: "flex"}}}>
            <div className="container-about">
              <img src={"/assets/AboutBackground.png"} className="container-about" />
            </div>
          
          </Grid>
          <Grid item xs={12} md={6} sx={{display: {md: "flex", xs: "none"}}}>
            <div className="container-about">
              <img src={"/assets/AboutBackground.png"} className="container-about" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
          <div className="container-right">
          <div className="container-right-1">
            <Box className="heading-about" sx={{alignItems: {xs: "center", md: "flex-end"}}}>
              <div className="name-heading">Pankaj Bhati</div>
              <div className="name-title">
                Full-Stack &nbsp; Software-Developer
              </div>
            </Box>
            <Box className="image-container" sx={{display: {xs: "none", md: "flex"}}}>
              <img src={"/assets/pankaj_bhati.jpg"} className="image-attributes" />
            </Box>
          </div>
          <div className="container-right-2">
            <Box className="about-overview" sx={{paddingTop: {xs: "0px"}, padding: "5rem"}}>
              <p>
              Hi I am a full-stack developer currently based out of Noida (U.P). I am an under-graduate in
              Computer Engineering from Delhi Technological University (formerly known as Delhi College of Engineering).
              I graduated with 8.14 CGPA from my college (2017-2021) and started working with Indus Valley Partners
              after my college. I have two years of professional development experience. During my time at DTU I was 
              fascinated by emerging web technologies in the field of computers and started learning React and other
              frameworks. After a while I found it more interesting than ever and then worked in different technologies
              with Indus Valley Partners. I am passionate about creating beautiful and functional websites and application.
              I am constantly pushing myself to learn and grow as a developer.
              </p>
              <Button variant="contained" className="contact-button">Contact Me</Button>
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
