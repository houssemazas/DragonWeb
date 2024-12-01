import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">DragonWeb </span>
            from <span className="purple">Tunisi.</span>
            <br />
            We are an agency specializing in the creation of turnkey websites. We offer our services in the field of web development for communication agencies abroad.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> We thoroughly study your business, your client type, and your specific requests according to your needs.
            </li><br/>
            <li className="about-activity">
              <ImPointRight />We deeply analyze the architecture and organization of your product to better manage your customers' satisfaction.
            </li><br/>
            <li className="about-activity">
              <ImPointRight />Our mission is based on analyzing your vision and achieving your objectives.
            </li><br/>
            <li className="about-activity">
              <ImPointRight />From web content writing to putting your site online, TriWeb offers you a functional, efficient, and dynamic web solution.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">DragonWeb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
