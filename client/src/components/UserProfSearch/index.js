import React from "react";

function UserProfSearch() {
  // const searchUsersBtn (){
  // search thru "liked" users

  return (
    <div className="input-group mt-5 mb-3">
      <input
        type="text"
        className="form-control"
        aria-label="Amount (to the nearest dollar)"
        placeholder="Search for a user..."
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </div>
    // {/* onClick{searchUsersBtn} */}
  );
}

export default UserProfSearch;
