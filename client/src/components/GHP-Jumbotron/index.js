import React from "react";

function GHPJumbotron() {
  return (
    <div class="container">
      <div class="jumbotron text-center">
        <svg
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 140x140"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#777" dy=".3em">
            140x140
          </text>
        </svg>
        <h1 class="display-4">Melinda Gates</h1>
        <p class="lead">@melindagates</p>
        <p>
          <i class="fa fa-map-marker"></i> Seattle, WA
        </p>
      </div>
    </div>
  );
}

export default GHPJumbotron;
