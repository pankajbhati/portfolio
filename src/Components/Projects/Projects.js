import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CardComponent from "./CardComponent";

// assets and css files
import "./Projects.css";
import main from "../../data.json";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const arr = ["item 1", "Item 2", "Item 3"];
  const projects = main.projects;

  const handleButtonClick = (index) => {
    console.log("index ", index);
    console.log(main);

    setIndex(index);
  };

  return (
    <>
      <Box className="project-container">
        <Box className="project-heading-container">
          <Typography className="project-heading">Projects</Typography>
        </Box>
        <Box className="project-main-container">
          <Box className="project-content">
            <Box className="project-tab-container">
              {arr.map((item, index) => {
                return (
                  <Box
                    className="project-tab"
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
              <CardComponent project={projects[index]} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
