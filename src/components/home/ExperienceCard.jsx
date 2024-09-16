import React from "react";
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col
      lg="6"
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <div className="pb-5 text-center">
        <img
          className="bg-white mb-3"
          src={data.companylogo}
          alt=""
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />
        <p
          style={{
            color: "#1e1e1e", // Mantiene la consistencia de color con MainBody
            fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la misma tipografía
          }}
        >
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
