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
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
