import React, { Component } from 'react';
import "./AboutMe.css";


class AboutMe extends Component {
    render() {
        return (
            <div class="container-fluid">
                <br />
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="top">About Me</h2>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-sm-3">
                        <img src="/Images/Gregory.jpg" alt="Gregory Monroe II" class="img-thumbnail Gregory" />
                    </div>
                    <div class="col-sm-5">
                        <p><strong>
                            Gregory Monroe II a MERN Full-Stack Developer, who got his education from the Georgia Institute of Technology. Previous to that, Gregory attained his Bachelor’s degree in Music Performance from the University of Central Florida. He now has been playing the piano for 25 years. 
                        </strong></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;