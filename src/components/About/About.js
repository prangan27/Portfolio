import React, { Suspense }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
// import Techstack from "./Techstack";
import Tech from "./Tech";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
//import Toolstack from "./Toolstack";
import Tool from "./Tool";
//import WordCloud from "../WordCloud";
import { AiFillCaretDown } from "react-icons/ai";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard/>
          </Col>
          <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img">
          <img src={laptopImg} alt="about" className="img-fluid" />
        
        

        <div style={{right: '5vw', position: 'absolute', zIndex: '100', top: '30px'}} className="mobileshow">
        <a href='#mobile-scroll' className="mobileshowicon" >
          <AiFillCaretDown style={{ color: 'white' }}  fontSize={'1.1em'} className='icon-colour  home-social-icons'/>
        </a>
      </div>

          <div style={{ height: "500px" }}>
          <Suspense fallback={<h1 style={{ color: "white" }}>Loading...</h1>}>
        {/* <WordCloud/> */}
        </Suspense>
        </div>
        </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Tech />

        <h1 className="project-heading">
          <strong className="purple">Technologies & tools</strong> I use
        </h1>
        <Tool />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
