import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="React Ecommerce App"
              description="An ecommerce site developed with React and using ReduxToolkit for state management."
              ghLink="https://github.com/sinankinik/Ecommerce-App-React-Reduxtoolkit"
              demoLink="https://itix.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="React Lawyer Landing Page"
              description="A landing page developed with React for lawyers."
              ghLink="https://github.com/sinankinik/react-lawyer-app"
              demoLink="https://react-lawyer-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GameDev"
              description="A landing page I prepared upon the request of a customer. Figma design was given to me and developed with React."
              ghLink="https://github.com/sinankinik/GameDev"
              demoLink="https://game-dev-gray.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SunStone"
              description="A landing page I prepared upon the request of a customer. Figma design was given to me and developed with React."
              ghLink="https://github.com/sinankinik/sunstone-react-nextjs"
              demoLink="https://sunstone-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Quxie Web Design"
              description="The website I developed for a webdesign company. The entire design was developed using Html and Tailwind Css. Used vanilla JS for interactivity."
              ghLink="https://github.com/sinankinik/QuxieWebDesign"
              demoLink="https://www.quxiewebdesign.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Next Js Ecommerce App"
              description="Another ecommerce app I developed. This time, Next Js framework was used upon my customer's request."
              ghLink="https://github.com/sinankinik/react-nextjs-ecommerce-app"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
