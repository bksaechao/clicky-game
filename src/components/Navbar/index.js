import React from "react";
import "./style.css";

function Navbar() {
    return <>
    <nav className="navbar position-fixed">
  <a href="#" className="navbar-brand">
    <img id="sharingan" src="/images/sharingan.jpg"></img>
  </a>
  <ul>
    <li>User Guess</li>
    <li>Score: | Top Score: </li>
  </ul>
</nav>
    </>
}

export default Navbar;