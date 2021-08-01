import "./topbar.scss";
import React from "react";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Mail, Person } from "@material-ui/icons";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            y<LocalLibraryIcon />o
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+90 545 276 88 57</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ozcelikyusufm@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
