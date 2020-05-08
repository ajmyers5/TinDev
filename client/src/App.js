import React from "react";
import GHP from "./pages/GHP";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
import "./App.css";

function App() {
  return (
    <div>
      <GHP />
      <LandingPage />
      <LoginPage />
      <UserProfile />
    </div>
  );
}

export default App;
