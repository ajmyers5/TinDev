import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/index";
import UserProfSearch from "../components/UserProfSearch/index";
import UserProfLiked from "../components/UserProfLiked/index";
import UserProfGHCard from "../components/UserProfGHCard/index";

class UserProfile extends Component {
  state = {
    user: [],
  };

  componentDidMount() {
    axios
      .get("/dev", {
        headers: {
          user: this.props.match.params.id,
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          user: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user} />
        <UserProfSearch />
        <UserProfLiked />
        <UserProfGHCard likedUsers={this.state.user.likes} />
      </div>
    );
  }
}

export default UserProfile;
