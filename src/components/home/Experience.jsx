import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experience = ({ experiences }) => {
  // Configuración del carrusel
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Hace que el carrusel sea infinito
    speed: 1500, // Velocidad de la transición
    slidesToShow: 3, // Número de tarjetas visibles al mismo tiempo
    slidesToScroll: 1, // Número de tarjetas que se desplazan cada vez
    autoplay: true, // Habilita el desplazamiento automático
    autoplaySpeed: 3500, // Velocidad del desplazamiento automático
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2
            className="display-5 mb-5 text-center"
            style={{
              color: "#1e1e1e", // Mantiene la consistencia de color con MainBody
              fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la misma tipografía
            }}
          >
            {experiences.heading}
          </h2>
          <Slider {...settings}>
            {experiences.data.map((data, index) => (
              <ExperienceCard key={index} data={data} />
            ))}
          </Slider>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Experience;
