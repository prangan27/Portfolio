import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { Col, Row } from "react-bootstrap";

import ReactTooltip  from "react-tooltip";
import "../../../src/style.css";

import {
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCsharp,
    SiDotnet,
    SiNodedotjs,
    SiReact,
    SiMysql,
    SiGit,
    SiAngular,


} from "react-icons/si";





function Tech() {
    return (

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" data-tip data-for="c++">
                <CgCPlusPlus />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="c++" ><span>c++</span></ReactTooltip></span>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="js">
                <SiJavascript />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="js"><span>JavaScript</span></ReactTooltip></span>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="angular">
                <SiAngular />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="angular"><span>Angular</span></ReactTooltip></span>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="c#">
                <SiCsharp />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="c#" className={"tooltip"}><span>c#</span></ReactTooltip></span>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="dotnet">
                <SiDotnet />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="dotnet" className={"tooltip"}><span>.NET Framwork & .Net Core</span></ReactTooltip></span>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="react">
                <SiReact  />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="react"><span>React</span></ReactTooltip></span>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="mysql">
                <SiMysql />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="mysql"><span>MySQL</span></ReactTooltip></span>

            <Col xs={4} md={2} className="tech-icons" data-tip data-for="python">
                <SiPython />
            </Col>
            <span style={{"width": "1px"}}><ReactTooltip id="python"><span>Python</span></ReactTooltip></span>

            
        </Row>
    );
}



export default Tech;

