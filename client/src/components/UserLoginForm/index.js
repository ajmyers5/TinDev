import React from "react";

function UserLoginForm(props) {
  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
        <form onSubmit={props.handleSubmit} className="form-signin mt-5">
          <div className="form-label-group">
            <input
              type="text"
              name="username"
              className="form-control mb-3"
              placeholder="Enter your github handler..."
              required={true}
              value={props.username}
              onChange={props.setUsername}
            />
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted text-center">Tindev | 2020</p>
        </form>
      </div>
    </div>
  );
}
export default UserLoginForm;
