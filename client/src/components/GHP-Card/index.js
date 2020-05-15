import React from "react";

function GHPCard(props) {
  return (
    <div className="container">
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{props.header}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title">{props.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default GHPCard;
