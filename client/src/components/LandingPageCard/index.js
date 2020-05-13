import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

class LandingPageCard extends Component {
  render() {
    return (
      <div className="col-md-4 mb-4 shadow-sm">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img_url} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.bio}</Card.Text>
            <Fragment>
              <Button
                style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}
                variant="info"
              >
                <i className="fa fa-eye"></i>
              </Button>
              <Button
                style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}
                variant="success"
                onClick={() => this.props.handleLike(this.props.id)}
              >
                <i className="fa fa-thumbs-up"></i>
              </Button>
              <Button
                style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}
                variant="primary"
                onClick={() => this.props.handleDislike(this.props.id)}
              >
                <i className="fa fa-times"></i>
              </Button>
            </Fragment>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default LandingPageCard;
