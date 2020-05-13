import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


class LandingPageCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src= {this.props.data.avatar} />
          <Card.Body>
            <Card.Title>{this.props.data.name}</Card.Title>
            <Card.Text>{this.props.data.bio}</Card.Text>
            {/* emailBtn */}
            {/* deleteBtn */}
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default LandingPageCard;
