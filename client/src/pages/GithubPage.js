import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import GHPJumbotron from "../components/GHP-Jumbotron";
import GHPCard from "../components/GHP-Card";

class GithubPage extends Component {
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
        <Navbar user={this.state.user}></Navbar>
        <GHPJumbotron
          name={this.state.user.name}
          user={this.state.user.user}
          location={this.state.user.locationOfUser}
          avatar={this.state.user.avatar}
        ></GHPJumbotron>
        <GHPCard
          header="Number of Followers"
          title={this.state.user.numFollowers}
        />
        <GHPCard
          header="Number of Following"
          title={this.state.user.numFollowing}
        />
        <GHPCard
          header="Number of Repositories"
          title={this.state.user.numRepos}
        />
      </div>
    );
  }
}

export default GithubPage;
