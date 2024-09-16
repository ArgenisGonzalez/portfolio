import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = {
    backgroundColor: "#121212", // Fondo gris oscuro estilo programador
    color: "#ffffff", // Color del texto para mejor contraste
    padding: "50px 0",
  };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center">
      <Container>
        {props.children}
        <p
          className="mb-2"
          style={{
            fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la misma tipografía
            color: "#b0bec5", // Color de texto suave para mantener la consistencia
          }}
        >
          <i className="fas fa-laptop-code"></i> Passionate Backend Developer
          dedicated to building scalable and efficient solutions. Let's connect
          and create something amazing together!
        </p>
        <p
          className="mb-0"
          style={{
            fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la misma tipografía
            color: "#b0bec5",
          }}
        >
          <small>
            Open to collaborations and always ready to innovate. Feel free to
            reach out!
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
