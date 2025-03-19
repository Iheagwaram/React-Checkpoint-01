import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = "John"; // Change this to your name or leave it empty

function App() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <h3 className="mt-3">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h3>

      {firstName && (
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          className="mt-2 rounded-circle"
        />
      )}
    </Container>
  );
}

export default App;
