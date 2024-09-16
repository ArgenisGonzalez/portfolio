import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import { motion } from "framer-motion";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          backgroundColor: "#121212", // Fondo gris oscuro
          backgroundSize: "cover",
          padding: "50px 0",
        }}
        className="title bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <Container className="text-center">
          <motion.h1
            ref={ref}
            className="display-1"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontWeight: "bolder",
              color: "#00d2ff", // Color del texto
              fontFamily: "'Pixelify Sans', sans-serif", // Aplicar tipografía
            }}
          >
            {title}
          </motion.h1>
          <Typist>
            <motion.div
              className="lead typist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              style={{
                fontWeight: "bold",
                color: "#b0bec5", // Color suave para el subtítulo
                fontFamily: "'Pixelify Sans', sans-serif", // Aplicar tipografía
              }}
            >
              {message}
            </motion.div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <motion.a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
                whileHover={{ scale: 1.2, color: "#ffdd57" }} // Hover similar a los iconos
                style={{ margin: "0 10px" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.i
                  className={`fab ${icon.image} fa-3x socialicons`}
                  style={{
                    transition: "color 0.3s",
                    color: "#fff",
                  }}
                  whileHover={{ color: "#00d2ff" }}
                />
              </motion.a>
            ))}
          </div>
          <motion.a
            className="btn btn-outline-light btn-lg"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
            whileHover={{
              scale: 1.08,
              color: "#1e1e1e",
              backgroundColor: "#00d2ff",
            }} // Hover similar a los iconos
            transition={{ type: "keyframes", stiffness: 100 }}
            style={{
              fontFamily: "'Pixelify Sans', sans-serif", // Aplicar tipografía
              color: "#fff", // Color del texto del botón
              borderColor: "#fff", // Borde del botón para resaltar
            }}
          >
            More about me
          </motion.a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
