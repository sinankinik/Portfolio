import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h2>JavaScript</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h2>React</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h2>Next JS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h2>Css</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h2>Html</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h2>Tailwind Css</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h2>Bootstrap</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h2>Node Js</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h2>Mongo DB</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h2>Firebase</h2>
      </Col>
    </Row>
  );
}

export default Techstack;
