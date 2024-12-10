import React from 'react';
import { Col } from 'react-bootstrap';

const Card = () => {
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1552346989-e069318e20a5?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Card;
