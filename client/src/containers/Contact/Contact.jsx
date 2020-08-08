import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br />
                <div className="container back">
                    <br />
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="top">Contact</h3>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6">
                            <h3><a href="https://www.linkedin.com/in/gregthemusician/">LinkedIn</a></h3>
                        </div>
                        <div className="col-sm-6">
                            <h3><a href="https://github.com/GTblue">GitHub</a></h3>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Email Address:  <a href = "mailto: gregthemusician@gmail.com">gregthemusician@gmail.com</a></h3>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Phone Number: 321-443-1319</h3> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;


