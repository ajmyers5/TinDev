import React from "react";

function UserLogin() {

return (
    <div className="container">
      <form className="form-signin mt-5">
        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control mb-3"
            placeholder="Username"
            required=""
            autofocus=""
          />
        </div>

        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className="form-control mb-3"
            placeholder="Password"
            required=""
          />
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted text-center">
          © Tindev Prototype | 2020
        </p>
      </form>
    </div>
)
}
export default UserLogin;