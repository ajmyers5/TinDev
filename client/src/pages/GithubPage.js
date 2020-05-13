import React, { Component } from "react";
// import Navbar from "../components/Navbar";
// import GHPJumbotron from "../components/GHP-Jumbotron";
// import GHPCard from "../components/GHP-Card";

class GithubPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default GithubPage;
