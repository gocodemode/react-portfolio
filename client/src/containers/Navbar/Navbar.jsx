import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Gregory Monroe II</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <Link to="/" className="nav-item nav-link active">About Me</Link>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                <Link to="/projects" className="nav-item nav-link active">Projects</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
