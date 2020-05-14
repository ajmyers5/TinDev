import React from "react";

function GHPJumbotron(props) {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <img src={props.avatar} alt={props.name}></img>
        <h1 className="display-4">{props.name}</h1>
  <p className="lead">@{props.user}</p>
        <p>
          <i className="fa fa-map-marker"></i>  {props.location}
        </p>
      </div>
    </div>
  );
}

export default GHPJumbotron;
