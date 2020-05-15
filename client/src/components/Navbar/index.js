import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  console.log("tae");
  console.log(props);
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a
          className="navbar-brand btn btn-primary"
          href={`/dev/${props.user._id}`}
        >
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
