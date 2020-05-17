import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class LandingPageCard extends Component {
  render() {
    const cardStyle = {
      height: "85%",
    };

    const cardImage = {
      width: "100%",
      height: "20vw",
      objectFit: "cover",
    };

    return (
      <div className="col-md-4 mb-4 mt-2">
        <Card style={cardStyle}>
          <Card.Img style={cardImage} variant="top" src={this.props.img_url} />
          <Card.Body>
            <Card.Title className="text-center">{this.props.name}</Card.Title>
            <Card.Text className="text-center">{this.props.bio}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="mt-2">
          <Card.Body className="mx-auto">
            <Link
              to={`/githubuser/${this.props.id}/${this.props.loggedUserId}`}
            >
              <Button
                style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}
                variant="info"
              >
                <i className="fa fa-eye"></i>
              </Button>
            </Link>
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
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default LandingPageCard;
