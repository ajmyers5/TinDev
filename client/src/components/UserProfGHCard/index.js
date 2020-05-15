import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function UserProfGHCard(props) {
  return (
    <div>
      {props.likedUsers.map((user) => (
        <div className="col-md-4 mb-4 shadow-sm">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.avatar} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.bio}</Card.Text>
              <Fragment>
                <a
                  href={`mailto:${user.email}`}
                  style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}
                  variant="info"
                >
                  <i className="fa fa-envelope"></i>
                </a>
                <Button
                  style={{ marginLeft: "0.2rem", marginRight: "0.2rem" }}
                  variant="primary"
                >
                  <i className="fa fa-times"></i>
                </Button>
              </Fragment>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default UserProfGHCard;
