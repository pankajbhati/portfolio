import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

// assets and css files
// import DTU from "../../assets/DTU2.jpg";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div
        className="container-education"
        // style={{
        //   backgroundImage: `url(${BackgroundImage})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="education-heading">Education</div>
        <div className="education-content-container">
          <Grid container spacing={2} flexGrow={1}>
            <Grid
              item
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                padding: "16px",
              }}
              md={6}
            >
              <img
                className="dtu-image"
                src={"/assets/DTU2.jpg"}
                alt="Delhi Technological University"
              />
              {/* <Box>
                <img src={DTU} alt="Delhi Technological University" />
              </Box> */}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                padding: "16px",
              }}
            >
              <img
                className="dtu-image"
                src={"/assets/DTU2.jpg"}
                alt="Delhi Technological University"
              />
              {/* <Box>
                <img src={DTU} alt="Delhi Technological University" />
              </Box> */}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
              md={6}
            >
              <Box sx={{ width: "80%", paddingTop: "4rem" }}>
                <Box className="education-heading1">Computer Engineering</Box>
                <Box className="education-heading2">
                  Delhi Technological University (DCE)
                </Box>
                <Box className="education-content">
                  I hold a Bachelor of Technology in Computer Engineering, which
                  I obtained from Delhi Technological University (2017-2021).
                  During my academic journey, I gained a strong foundation in
                  computer science principles, algorithms, and programming
                  languages. My coursework included advanced web development,
                  where I successfully developed a student application portal
                  which could handle database of students, their courses,
                  teacher, departments and many more on React.js. Additionally,
                  I undertook a database systems course, where I designed and
                  implemented a SQL database for a real-world project
                  application. These hands-on projects provided me with valuable
                  experience in working with various technologies and reinforced
                  my programming skills. Furthermore, to stay updated with
                  industry trends and expand my knowledge, I actively pursue
                  professional development opportunities. I also completed a
                  research project in Machine Learning which could the predict
                  and suggest genres of movies by their posters and trailer.
                  This research paper was later on published in CONIT, a world
                  wide conference affiliated to IEEE.
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Education;
