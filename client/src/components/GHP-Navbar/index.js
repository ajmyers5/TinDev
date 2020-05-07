import React from "react";

function GHPNavbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src=""
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <i className="fa fa-fire"></i> Tindev
        </a>
        <a className="navbar-brand" href="/">
          <i className="fa fa-user"></i> Bill Gates
        </a>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default GHPNavbar;
