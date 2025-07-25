import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Hotel from "../../Assets/Hotel.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rama Phani Kishore Ryali </span>
            from <span className="purple">Amalapuram, India.</span>
            <br />
            I am currently looking for job
            <br />
            I have completed B.Tech in Computer Science and engineering at Lendi Institute of Engineering and Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard work never fails!"{" "}
          </p>
          <footer className="blockquote-footer">Kishore</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
