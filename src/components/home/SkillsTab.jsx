import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col
        xs={12}
        md={6}
        style={{
          color: "#b0bec5", // Color suave para el texto, consistente con MainBody
          fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la misma tipografía
          padding: "10px", // Añadir algo de espacio para una mejor presentación
        }}
      >
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col
        xs={12}
        md={6}
        style={{
          color: "#b0bec5", // Color suave para el texto
          fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la misma tipografía
          padding: "10px", // Añadir espacio consistente
        }}
      >
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
