import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  return (
    <Jumbotron
      ref={skillsTabRef}
      fluid
      className="m-0"
      id="skills"
      style={{
        backgroundColor: "#1e1e1e", // Fondo gris oscuro
        color: "#ffffff", // Texto en blanco para mejor contraste
        padding: "50px 0",
        fontFamily: "'Pixelify Sans', sans-serif", // Asegura que se aplique la tipografía en todo el Jumbotron
      }}
    >
      <Container className="p-5">
        <h2
          ref={skillsTabRef}
          className="display-4 pb-5 text-center"
          style={{
            color: "#00d2ff",
            fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la misma tipografía
          }}
        >
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
          style={{
            fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la tipografía a todo el componente Tabs
          }}
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              color: "#b0bec5",
            }}
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              color: "#b0bec5",
            }}
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
