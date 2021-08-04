import React, { Component } from 'react';
import "./AboutMe.css";


class AboutMe extends Component {
    render() {
        return (
            <div className="container-fluid back">
                <br />
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="top">About Me</h2>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-3">
                        <img src="/Images/Gregory.jpg" alt="Gregory Monroe II" className="img-thumbnail Gregory" />
                    </div>
                    <div className="col-sm-5">
                        <p><strong>
                            Gregory Monroe II is a Full-Stack Developer, who got his education from the Georgia Institute of Technology. Previous to that, Gregory attained his Bachelor’s degree in Music Performance from the University of Central Florida. He now has been playing the piano for 25 years. 
                        </strong></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;