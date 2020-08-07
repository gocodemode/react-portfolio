import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <AboutMe />
            </div>
        );
    }
}

export default Home;