import React from "react";

const imageStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
};

function GHPJumbotron(props) {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <img style={imageStyle} src={props.avatar} alt={props.name}></img>
        <h1 className="display-4">{props.name}</h1>
        <p className="lead">@{props.user}</p>
        <p>
          <i className="fa fa-map-marker"></i> {props.location}
        </p>
      </div>
    </div>
  );
}

export default GHPJumbotron;
