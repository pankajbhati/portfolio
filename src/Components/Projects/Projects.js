import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
import CardComponent from "./CardComponent";

// assets and css files
import "./Projects.css";
import main from "../../data.json";
// import HTML from "../../assets/logos/Html Logo.png";

const Projects = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const arr = ["item 1", "Item 2", "Item 3"];
  const projects = main.projects;
  const skills = main.skills;

  const handleButtonClick = (index) => {
    console.log("index ", index);
    console.log(main);

    setTabIndex(index);
  };

  return (
    <>
      <Box className="project-container">
        <Box className="skill-heading-container">
          <Typography className="skill-heading">Skills</Typography>
        </Box>
        <Box className="project-skill-div">
          <Grid container spacing={1} className="project-skills-container">
            {
              skills.map((item, skillIndex) => {
                return(
                  <>
                  <Grid item className="project-skills-item" xs={3} md={1.5} spacing={1}>
                    <Box className="project-skill-image">
                    <img style={{width: "5rem", height: "5rem"}} title={item.name} src={item.image} />
                    </Box>
                  </Grid>
                  </>
                );
              })
            }
          </Grid>
        </Box>
        <Box className="projects-project-container">
        <Box className="project-heading-container">
          <Typography className="project-heading">Projects</Typography>
        </Box>
        <Grid container spacing={4} sx={{width: "100%", height: "80%"}}>
          {
            projects.map((item, index) => {
              return (
                <>
                <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center"}}>
                  
                    {((index+1)%2 == 0) ? <>
                      <Box className="project-item-container" sx={{backgroundColor: "rgb(33, 150, 243)", color: "white"}}>
                      <Box className="project-item-heading">{item.name}</Box>
                    <Box className="project-item-category">Category: {item.category}</Box>
                    <Box className="project-item-tech-stack">Tech Stack: {item.techstack}</Box>
                    <Box className="project-item-links">
                      <Box className="project-item-link">Code: {item.links.code}</Box>
                      <Box className="project-item-link">Visit{item.links.visit}</Box>
                    </Box>
                    </Box>
                    </> : <>
                    <Box className="project-item-container">
                    <Box className="project-item-heading">{item.name}</Box>
                    <Box className="project-item-category">Category: {item.category}</Box>
                    <Box className="project-item-tech-stack">Tech Stack: {item.techstack}</Box>
                    <Box className="project-item-links">
                      <Box className="project-item-link">Code: {item.links.code}</Box>
                      <Box className="project-item-link">Visit: {item.links.visit}</Box>
                    </Box>
                    </Box>
                    </>}
                </Grid>
                </>
              )
            })
          }
        </Grid>
        </Box>
        {/* <Box className="project-main-container">
          <Box className="project-content">
            <Box className="project-tab-container">
              {arr.map((item, index) => {
                return (
                  <Box
                    className={tabIndex == index ? "project-active-tab" : "project-tab"}
                    key={index}
                    index={index}
                    onClick={() => handleButtonClick(index)}
                  >
                    <Typography className="project-tab-content">
                      {item}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box className="project-data-container">
              <CardComponent project={projects[tabIndex]} />
            </Box>
          </Box>
        </Box> */}
      </Box>
    </>
  );
};

export default Projects;
