import React from "react";
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Icon from "@mui/material/Icon";

// css and asset files
// import BackgroundImage from "../../assets/ContactBackground.png";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <Box
        className="contact-container"
        // sx={{
        //   backgroundImage: `url(${BackgroundImage})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <Box className="contact-chat-container">
          <Box className="contact-chat-heading-container">
            <Box className="con-chat-container">
              <Box className="contact-chat-heading">Love to hear from you,</Box>
              <Box className="contact-chat-heading">Get in touch</Box>
            </Box>
            <Box className="contact-chat-icon">Icons</Box>
          </Box>

          <Grid container className="contact-grid-container">
            <Grid item xs={12} md={6}>
              <Box className="contact-grid-item">
                <Box className="contact-grid-item-text">Your name</Box>
                <Input placeholder="Full Name"></Input>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="contact-grid-item">
                <Box className="contact-grid-item-text">Your Email</Box>
                <Input placeholder="Full Name"></Input>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="contact-grid-item">
                <Box className="contact-grid-item-text">
                  What are you interested in?
                </Box>
                <Input placeholder="Full Name"></Input>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="contact-grid-item">
                <Box className="contact-grid-item-text">Contact Number</Box>
                <Input placeholder="Full Name"></Input>
              </Box>
            </Grid>
          </Grid>
          <Box className="contact-grid-item">
            <Box className="contact-grid-item-text">Message</Box>
            <Input placeholder="Let me know about your project"></Input>
          </Box>
          <Box>
            <Button
              sx={{
                width: "30%",
                backgroundColor: "rgb(33, 150, 243)",
                color: "white",
                marginTop: "2rem",
              }}
            >
              Just Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactMe;
