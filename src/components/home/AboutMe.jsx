import React from "react";
import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <Jumbotron
      id="aboutme"
      className="m-0"
      style={{
        backgroundColor: "#1e1e1e", // Fondo gris oscuro igual que MainBody
        color: "#ffffff", // Color del texto para contrastar con el fondo
        padding: "50px 0",
      }}
    >
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2
            className="display-4 mb-5 text-center"
            style={{
              color: "#00d2ff", // Mantener consistencia con los colores del título
              fontFamily: "'Pixelify Sans', sans-serif", // Aplicar la misma tipografía
            }}
          >
            {heading}
          </h2>
          <p
            className="lead text-center"
            style={{
              color: "#b0bec5", // Color del texto para que contraste y sea legible
              fontFamily: "'Pixelify Sans', sans-serif",
            }}
          >
            {message}
          </p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-light btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
                style={{
                  fontFamily: "'Pixelify Sans', sans-serif",
                  color: "#fff",
                  borderColor: "#fff",
                  transition: "all 0.3s ease",
                }}
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
