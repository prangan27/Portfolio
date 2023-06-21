import React from "react";	
import { Col, Row } from "react-bootstrap";	
import ReactTooltip from "react-tooltip";	
import {	
    SiVisualstudio,
    SiPostman,
    SiHeroku,
    SiVercel,
    SiVisualstudiocode,
    

} from "react-icons/si";	

function Tool() {	
    return (	
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="Visualstudiocode">
                <SiVisualstudiocode />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="Visualstudiocode"><span>Visualstudiocode</span></ReactTooltip></span>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="Visualstudio">
                <SiVisualstudio />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="Visualstudio"><span>Visualstudio</span></ReactTooltip></span>

            
            <Col xs={4} md={2} className="tech-icons" data-tip data-for="Heroku">
                <SiHeroku />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="Heroku"><span>Heroku</span></ReactTooltip></span>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="Vercel">
                <SiVercel />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="Vercel"><span>Vercel</span></ReactTooltip></span>
            
            </Row>	

    );	
}	
export default Tool;