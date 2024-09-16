import React, { useState } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const GetInTouch = ({ heading, message, email }) => {
  const [copied, setCopied] = useState(false);

  // Función para copiar el correo electrónico al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Resetea el mensaje de copiado después de 2 segundos
  };

  // Tooltip que se muestra cuando se pasa el mouse
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copied ? "Copied!" : "Copy to clipboard"}
    </Tooltip>
  );

  return (
    <>
      <h2
        className="display-4 pb-3 text-center"
        style={{
          fontFamily: "'Pixelify Sans', sans-serif",
          color: "#b0bec5",
        }}
      >
        {heading}
      </h2>
      <p
        className="lead text-center pb-3"
        style={{
          fontFamily: "'Pixelify Sans', sans-serif",
          color: "#fff",
        }}
      >
        {message},{" "}
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <span
            className="text-decoration-none"
            style={{ cursor: "pointer", color: "#00d2ff" }}
            onClick={copyToClipboard}
          >
            {email}
          </span>
        </OverlayTrigger>
        .
      </p>
    </>
  );
};

export default GetInTouch;
