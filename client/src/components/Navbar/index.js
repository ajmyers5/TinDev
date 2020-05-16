import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a
          className="navbar-brand btn btn-primary"
          href={`/dev/${props.user._id}`}
        >
          <i className="fa fa-fire"></i> Tindev
        </a>
        <a
          className="navbar-brand btn btn-primary"
          href={`/userprofile/${props.user._id}`}
        >
          <i className="fa fa-user"></i> {props.user.name}{" "}
        </a>
        <a className="btn btn-secondary my-2 my-sm-0" type="submit" href="/">
          Logout
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
