import React, { useContext, useState, useEffect } from "react";
import "./Nav.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VerifiedTwoToneIcon from "@mui/icons-material/VerifiedTwoTone";
import { UserContext } from "../contexts/UserContext";
const Nav = () => {
  const { msg } = useContext(UserContext);

  return (
    <div className="nav-div">
      <div className="arrow-div">
        <ArrowBackIcon className="arrow" />
        <div>
          <h1>Rules creation</h1>
          <hr />
        </div>
      </div>

      
        <div className="message-div">
          {msg && (
            <p>
              <VerifiedTwoToneIcon className="tick-mark" />
              {msg}
            </p>
          )}
        </div>
    
      <div className="nav-button">
        <button>Public Feed</button>
      </div>
    </div>
  );
};

export default Nav;
