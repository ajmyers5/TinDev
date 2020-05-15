import React from "react";

function UserLoginNavbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <button
          className="navbar-brand btn btn-primary mx-auto"
          disabled={true}
        >
          <i className="fa fa-fire"></i> Tindev
        </button>
      </div>
    </nav>
  );
}

export default UserLoginNavbar;
