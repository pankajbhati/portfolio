import React, {useState, useRef} from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import emailjs from "@emailjs/browser";
import axios from "axios";

// css and asset files
import "./ContactMe.css";

const ContactMe = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("")

  const form = useRef();

  const handleOnChange = (event, val) => {
    console.log("inside handle on change");
    if(event.target.id == "email-text-field")
      setEmail(event.target.value);
    if(event.target.id == "full-name-text-field")
      setFullName(event.target.value);
    if(event.target.id == "subject-text-field")
      setSubject(event.target.value);
    if(event.target.id == "message-text-field")
      setMessage(event.target.value);
  }

  const sendEmail = (event) => {

    // creating form from states

    var data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        'from_email': email,
        'from_name': fullName,
        'subject': subject,
        'message': message
      }
    }

    axios.post("https://api.emailjs.com/api/v1.0/email/send",data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error string ", error)
    })
  };

  return (
    <>
      <Box className="contact-container" sx={{width: {xs: "96vw", md:"100vw"}}}>
        <Box className="contact-inner-container" sx={{width: {xs: "80%", md: "60%"}, height: {md:"70%"}}}>
          <Grid container className="contact-grid">
            <Grid item xs={12} lg={4} className="contact-grid-item">
              <Box className="contact-heading-container">
                <Box className="contact-chat-heading">
                  <Box className="contact-heading">Let's Chat</Box>
                  <Box className="contact-heading">
                    Tell me about your project
                  </Box>
                  <Box className="contact-sub-heading">
                    Let's create something together
                    <TelegramIcon sx={{ color: "#0553f0" }} />
                  </Box>
                </Box>
                <Box className="contact-icon-container">
                  <Box className="contact-social-icon">
                    <Box className="contact-icon">
                      <a
                        href="https://github.com/pankajbhati"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <GitHubIcon sx={{ fontSize: "3rem" }} />
                      </a>
                    </Box>
                    <Box className="contact-icon-text">
                      <a
                        href="https://github.com/pankajbhati"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Visit my Github Profile
                      </a>
                    </Box>
                  </Box>
                  <Box className="contact-social-icon">
                    <Box className="contact-icon">
                      <a
                        href="https://www.linkedin.com/in/pankaj-bhati-dtu/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <LinkedInIcon
                          sx={{ fontSize: "3rem", color: "rgb(10,102,194)" }}
                        />
                      </a>
                    </Box>
                    <Box className="contact-icon-text">
                      <a
                        href="https://www.linkedin.com/in/pankaj-bhati-dtu/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Message me on LinkedIn
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={8} className="contact-grid-item">
              {" "}
              <Box className="contact-form-container">
                <TextField
                  id="full-name-text-field"
                  label="Full Name"
                  variant="outlined"
                  className="contact-form-fields"
                  onChange={(event, val) => handleOnChange(event, val)}
                />
                <TextField
                  id="email-text-field"
                  label="Email Address"
                  variant="outlined"
                  className="contact-form-fields"
                  onChange={(event, val) => handleOnChange(event, val)}
                />
                <TextField
                  id="subject-text-field"
                  label="Subject"
                  variant="outlined"
                  className="contact-form-fields"
                  onChange={(event, val) => handleOnChange(event, val)}
                />
                <TextField
                  id="message-text-field"
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={5}
                  className="contact-form-fields"
                  onChange={(event, val) => handleOnChange(event, val)}
                />
                <Box className="contact-form-button">
                  <Button variant="contained" onClick={(event) => sendEmail(event)}>Send Message!</Button>
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
