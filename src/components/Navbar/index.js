import React from "react";
import "./style.css";

function Navbar(props) {
    return <>
    <nav className="navbar position-fixed">
  <a href="#" className="navbar-brand">
    <img id="sharingan" src="/images/sharingan.jpg"></img>
  </a>
  <ul>
    <li>{props.status}</li>
    <li>Score: {props.score}| Top Score: {props.topScore}</li>
  </ul>
</nav>
    </>
}

export default Navbar;