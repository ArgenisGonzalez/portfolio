import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%", marginBottom: "15px" }}>
      <p
        className="lead mb-1 mt-2"
        style={{
          color: "#b0bec5", // Color suave para el texto
          fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la misma tipografía
        }}
      >
        {skill}
      </p>
      <ProgressBar
        className={!isScrolled ? "progress" : "progress-bar-animation"}
        now={value}
        style={{
          backgroundColor: "#333", // Fondo del ProgressBar
          borderRadius: "5px",
        }}
        variant="info" // Variante para ajustar el color de la barra
      />
    </div>
  );
}

export default SkillsBar;
