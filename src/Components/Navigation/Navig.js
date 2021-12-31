import React from "react";
import "./Navig.css";

const Navig = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <p onClick={() => onRouteChange("signout")}>Sign out</p>
      </nav>
    );
  } else {
    return (
      <nav>
        <p onClick={() => onRouteChange("signin")}>Sign In</p>
        <p onClick={() => onRouteChange("register")}>Register</p>
      </nav>
    );
  }
};
export default Navig;
