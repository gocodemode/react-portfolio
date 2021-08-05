import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br />
                <div className="container image">
                    <br />
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="top">Contact</h3>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12"> 
                            <h4 className="top"><a href="https://www.linkedin.com/in/gregthemusician/">LinkedIn</a></h4>
                        </div>                    
                    </div>
                    <br/> 
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="top"><a href="https://github.com/GTblue">GitHub</a></h4>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12"> 
                            <h4 className="top">Email Address: <a href = "mailto: gregthemusician@gmail.com">gregthemusician@gmail.com</a></h4>
                        </div>
                    </div>
                        
                    <br />
                    <div className="row">
                        <div className="col-sm-12"> 
                            <h4 className="top">Phone Number: 321-443-1319</h4> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;


