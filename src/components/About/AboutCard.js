import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sinan Kinik </span>
            from <span className="purple"> Istanbul, Turkey</span>
            <br />
            I am currently working as a Freelance Frontend Developer.
            <br />
            I am a graduate of Selçuk University Software Technologies.
            <br />
            <br />
            I am married and I have two sons.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
