import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/index";
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
              });
          });
        }
      });
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user} />
        <div className="container mt-5">
          <UserProfGHCard
            loggedUser={this.state.user}
            likedUsers={this.state.likedUsers}
          />
        </div>
      </div>
    );
  }
}

export default UserProfile;
