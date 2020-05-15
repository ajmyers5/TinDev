import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/index";
import UserProfSearch from "../components/UserProfSearch/index";
import UserProfLiked from "../components/UserProfLiked/index";
import UserProfGHCard from "../components/UserProfGHCard/index";

class UserProfile extends Component {
  state = {
    user: [],
    likedUsers: [],
  };

  componentDidMount() {
    axios
      .get("/dev", {
        headers: {
          user: this.props.match.params.id,
        },
      })
      .then((response) => {
        this.setState({
          user: response.data,
        });

        // Get IDs of liked users
        // GET request
        // Push it into the state's Array

        if (this.state.user.likes.length > 0) {
          const likedUsersData = [];
          this.state.user.likes.forEach((id) => {
            axios
              .get("/dev", {
                headers: {
                  user: id,
                },
              })
              .then((response) => {
                likedUsersData.push(response.data);
                this.setState({ likedUsers: likedUsersData });
                console.log(response.data);
              });
          });
        }
      });
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user} />
        <UserProfSearch />
        <UserProfLiked />
        <UserProfGHCard likedUsers={this.state.likedUsers} />
      </div>
    );
  }
}

export default UserProfile;
