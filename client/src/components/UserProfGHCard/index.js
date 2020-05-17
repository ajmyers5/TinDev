import React from "react";

const imageStyle = {
  width: "100px",
  heigth: "100px",
};

function UserProfGHCard(props) {
  return (
    <div className="card">
      <div className="card-header">
        <i className="fa fa-users"></i> Liked Users
      </div>
      <ul className="list-group">
        {props.likedUsers.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={user._id}
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={imageStyle}
            />
            <a href={`/githubuser/${user._id}/${props.loggedUser._id}`}>
              {user.name}
            </a>
            <a href={`mailto:${user.email}`}>
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfGHCard;
