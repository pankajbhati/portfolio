import React from "react";
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Icon from "@mui/material/Icon";

// css and asset files
import BackgroundImage from "../../assets/ContactBackground.png";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <Box
        className="contact-container"
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box className="contact-inner-container">
          <Grid container className="contact-grid">
            <Grid item xs={12} md={6} className="contact-grid-item">
              <Box
                className="contact-chat-container"
                sx={{ width: { xs: "90%", md: "80%" } }}
              >
                <Box
                  className="contact-chat-heading"
                  sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
                >
                  Let's chat.
                </Box>
                <Box
                  className="contact-chat-sub-heading"
                  sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
                >
                  Tell me about your project.
                </Box>
                <Box className="contact-social-links">
                  <Box className="contact-social-container">
                    <Box className="contact-social-icon">
                    <a
                        href="https://www.linkedin.com/in/pankaj-bhati-dtu/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                      <LinkedInIcon
                        sx={{ fontSize: "2.5rem", color: "rgb(10,102,194)" }}
                      />
                      </a>
                    </Box>
                    <Box className="contact-social-link" sx={{display: {xs: "none", md: "flex"}}}>
                      <a
                        href="https://www.linkedin.com/in/pankaj-bhati-dtu/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            fontFamily: 'Droid Serif,Georgia,serif0',
                          }}
                        >
                          Message on LinkedIn
                        </Typography>
                      </a>
                    </Box>
                  </Box>
                  <Box className="contact-social-container">
                    <Box className="contact-social-icon">
                    <a
                        href="https://github.com/pankajbhati"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                      <GitHubIcon sx={{ fontSize: "2.5rem" }} />
                      </a>
                    </Box>
                    <Box className="contact-social-link" sx={{display: {xs: "none", md: "flex"}}}>
                      <a
                        href="https://github.com/pankajbhati"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            fontFamily: 'Droid Serif,Georgia,serif0',
                          }}
                        >
                          View my Github profile
                        </Typography>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className="contact-grid-item">
              <Box
                className="contact-form-container"
                sx={{
                  width: { xs: "90%", md: "80%" },
                  height: { xs: "90%", md: "80%" },
                }}
              >
                <Box className="contact-form-heading">Send me a message </Box>
                <Box className="contact-input-container">
                  <Input placeholder="Full Name*" className="contact-input" />
                  <Input
                    placeholder="Email address*"
                    className="contact-input"
                  />
                  <Input placeholder="Subject*" className="contact-input" />
                </Box>
                <Box className="contact-email-content">
                  <Box>Tell me about your project*</Box>
                  <Input className="contact-email-body" placeholder="" />
                </Box>
                <Box className="contact-form-button" sx={{ backgroundColor: "#562af"}}>
                  <Button variant="contained">Send Message</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactMe;
