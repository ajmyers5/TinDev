import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="fa fa-fire"></i> Tindev
        </a>
        <Link to={`/userprofile/${props.user._id}`} className="navbar-brand">
          <i className="fa fa-user"></i> {props.user.name}
        </Link>

        <a className="btn btn-secondary my-2 my-sm-0" type="submit" href="/">
          Logout
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
