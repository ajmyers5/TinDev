import React from "react";
import LandingPageCard from "../LandingPageCard";

function LandingPageContainer(props) {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {props.users.map((user) => (
            <LandingPageCard
              key={user._id}
              id={user._id}
              img_url={user.avatar}
              name={user.name}
              bio={user.bio}
              handleLike={props.handleLike}
              handleDislike={props.handleDislike}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPageContainer;