import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar"

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>This is my home page</h1> 
            </div>
        );
    }
}

export default Home;