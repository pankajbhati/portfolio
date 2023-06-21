import { Box, Typography } from '@mui/material';
import React from 'react';

// assets and css files
import './Projects.css';

const CardComponent = (props) => {


  const item = props.project;
  const links = item.links;

  return(
    <>
    <Box className="card-container">
      <Box className="card-project-name">
        {item.name}
      </Box>
      <Box className="card-description">{item.description}</Box>
      <Box className="card-tech-stack">Tech Stack: {item.techstack}</Box>
      <Box>{links.code}</Box>
      <Box className="card-category">Category: {item.category}</Box>
    </Box>
    </>
  )
};

export default CardComponent;