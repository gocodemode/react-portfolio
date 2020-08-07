import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a
            class="navbar-brand"
            href="https://www.linkedin.com/in/gregthemusician/"
          >
            Gregory Monroe II
          </a>
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
              <a class="nav-item nav-link active" href="#">
                About Me <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="contact.html">
                Contact
              </a>
              <a class="nav-item nav-link" href="project.html">
                Projects
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
