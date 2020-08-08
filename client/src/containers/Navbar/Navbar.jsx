import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="https://www.linkedin.com/in/gregthemusician/" className="navbar-brand top">Gregory Monroe II</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <Link to="/" className="nav-item nav-link active">About Me</Link>
                <Link to="/contact" className="nav-item nav-link active">Contact</Link>
                <Link to="/projects" className="nav-item nav-link active">Projects</Link>
                <Link to="/resume" className="nav-item nav-link active">Resume</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
