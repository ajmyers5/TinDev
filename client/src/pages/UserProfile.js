import React from "react";
import GHPNavbar from "../components/GHP-Navbar/index";
import UserProfSearch from "../components/UserProfSearch/index";
import UserProfLiked from "../components/UserProfLiked/index";
import UserProfGHCard from "../components/UserProfGHCard/index";

function UserProfile() {
  return (
    <div>
      <GHPNavbar />
      <UserProfSearch />
      <UserProfLiked />
      <UserProfGHCard />
    </div>
  );
}

export default UserProfile;
