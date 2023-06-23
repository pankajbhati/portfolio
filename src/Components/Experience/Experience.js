import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Box from "@mui/material/Box";

// images
// import IndusValleyPartners from "../../assets/Indus_Valley_Partners.png";
// import ImmanentSolutions from "../../assets/Immanent_Solutions.jpg";
// import SuccessNumbers from "../../assets/Success_Numbers.jpg";
// import HourGlass from "../../assets/hour_glass.jpg";
// import ExperienceIll from "../../assets/ExperienceIll.png";
// import ExperienceTop from "../../assets/ExperienceTop.png";

// css files
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div
        className="container-experience"
        // style={{
        //   backgroundImage: `url(${ExperienceBG})`,
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "contain",
        //   backgroundAttachment: "fixed",
        // }}
      >
        <Box sx={{ display: {xs: "none", md: "flex"} ,position: "fixed", bottom: "0px"}}>
          <img src={"/assets/ExperienceIll.png"} style={{height: "22rem", width: "22rem"}} />
        </Box>
        <Box sx={{ display: {xs: "none", md: "flex"} ,position: "fixed", top: "12vh", right: "20px"}}>
          <img src={"/assets/ExperienceTop.png"} style={{height: "20rem", width: "22rem"}} />
        </Box>
        <div className="container-heading">Experience</div>
        <div className="container-content">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
                boxShadow: "4px 4px 4px 4px #ddd",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2023 Apr - present"
              iconStyle={{ color: "#fff" }}
              icon={
                <img
                  style={{
                    height: "7rem",
                    width: "7rem",
                    marginLeft: "-1.6rem",
                    marginTop: "-1.6rem",
                  }}
                  src={"/assets/Indus_Valley_Partners.png"}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Indus Valley Partners (Full Time)
              </h4>
              <p>
                Skills: Asp.Net, .Net-Core, C#, Podman, Docker, React, Redux,
                Javascript, JQuery, SQL Server
              </p>
              <ul>
                <li>
                  Worked effectively in a team of 3 to restructure current
                  application from monolithic to micro-services.
                </li>
                <li>
                  Integrated multiple modules and added X-Unit Testing to
                  thoroughly test the project, resulting in a 30% reduction in
                  possible application bugs.
                </li>
                <li>
                  Re-engineered project and proposed graph based structure for
                  data retrieval which increased swift message generation
                  efficiency by 20% and met ISO-20022 standards(standard for
                  data electronic change for banks and financial institutions).
                </li>
              </ul>
              {/* <p>
              Software Development, Testing, Debugging, Migration to .Net Core and React.
            </p> */}
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 Jul - 2023 Apr"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<img style={{height: "7rem", width: "7rem", marginLeft: "-1.6rem", marginTop: "-1.6rem"}} src={IndusValleyPartners} />}
          >
            <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Indus Valley Partners (Full Time)
            </h4>
            <p>
            Software Development, Testing, Debugging, Migration to .Net Core and React.
            </p>
            <p>Skills: Asp.Net, C#, React, Redux, Javascript, JQuery, Chrome Debugger Tools</p>
          </VerticalTimelineElement> */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2020 - Aug 2020"
              contentStyle={{ boxShadow: "4px 4px 4px 4px #ddd" }}
              iconStyle={{ color: "#fff" }}
              icon={
                <img
                  style={{
                    height: "6rem",
                    width: "6rem",
                    marginLeft: "-1.6rem",
                    marginTop: "-1.6rem",
                  }}
                  src={"/assets/Immanent_Solutions.jpg"}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                React Native Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Immanent Solutions (Internship)
              </h4>
              <p>Skills: React-Native, Mongo DB, Redux, Bit-Bucket</p>
              <ul>
                <li>
                  Developed mobile applications for both iOS/Android platforms
                  using React Native framework.
                </li>
                <li>
                  Completed two industrial projects and designed over 20 screens
                  for each project.
                </li>
                <li>
                  Learned and introduced Redux to application and wrote 50% of
                  REST API calls made to the server.
                </li>
              </ul>
              {/* <p>
              Front-end development and back-end logic and data manipulation
            </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2019 - Jul 2019"
              contentStyle={{ boxShadow: "4px 4px 4px 4px #ddd" }}
              iconStyle={{ color: "#fff" }}
              icon={
                <img
                  style={{
                    height: "6rem",
                    width: "6rem",
                    marginLeft: "-1.6rem",
                    marginTop: "-1.6rem",
                  }}
                  src={"/assets/Success_Numbers.jpg"}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer Trainee
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Success Numbers (Internship)
              </h4>
              <p>Skils: Java, JEE, Eclipse, X-Store</p>
              <ul>
                <li>
                  Implemented order validation feature using Spring Framework
                  which reduced invalid orders by 30%.
                </li>
                <li>
                  Developed Rest API’s to integrate business logic for 5+ order
                  validations criterias with the front-end interface.
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={
                <img
                  style={{
                    height: "7rem",
                    width: "7rem",
                    marginLeft: "-1.6rem",
                    marginTop: "-1.6rem",
                  }}
                  src={"/assets/hour_glass.jpg"}
                />
              }
            />
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
