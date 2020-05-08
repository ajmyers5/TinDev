import React from "react";

function UserProfNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="TinDevLogo"
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          TinDev
        </Navbar.Brand>
        {/* USERNAME */}
        <Button type="submit">Logout</Button>
      </Navbar>
    </div>
  );
}

export default UserProfNavbar;
