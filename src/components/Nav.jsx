import React from "react";
import "./Nav.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import MinimizeIcon from "@mui/icons-material/Minimize";
const Nav = () => {
  return (
    <div className="nav-div">
      <div className="arrow-div">
        <ArrowBackIcon className="arrow" />
        <div>
          <h1>Rules creation</h1>
          <hr />
        </div>
      </div>

      <div>
        <p>varient added</p>
      </div>

      <div className="nav-button">
        <button>Public Feed</button>
      </div>
    </div>
  );
};

export default Nav;
