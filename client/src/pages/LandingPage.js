import React, { Component } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import LandingPageContainer from "../components/LandingPageContainer";

class LandingPage extends Component {
  state = {
    users: [],
    user: [],
  };

  componentDidMount() {
    axios
      .get("/devs", {
        headers: {
          user: this.props.match.params.id,
        },
      })
      .then((response) => {
        this.setState({ users: response.data });
      });

    axios
      .get("/dev", {
        headers: {
          user: this.props.match.params.id,
        },
      })
      .then((response) => {
        this.setState({ user: response.data });
      });
  }

  handleLike = (id) => {
    axios.post(`/devs/${id}/likes`, null, {
      headers: { user: this.props.match.params.id },
    });
    this.setState({
      users: this.state.users.filter((user) => user._id !== id),
    });
  };

  handleDisLike = (id) => {
    axios.post(`/devs/${id}/dislikes`, null, {
      headers: { user: this.props.match.params.id },
    });

    this.setState({
      users: this.state.users.filter((user) => user._id !== id),
    });
  };

  render() {
    return (
      <div>
        <Navbar user={this.state.user} />
        <LandingPageContainer
          user={this.state.user}
          users={this.state.users}
          handleLike={this.handleLike}
          handleDislike={this.handleDisLike}
        />
      </div>
    );
  }
}

export default LandingPage;
