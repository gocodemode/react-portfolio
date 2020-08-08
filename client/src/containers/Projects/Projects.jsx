import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";

class Project extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br />
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">ReadMeTV</h5>
                                    <br />
                                    <img src="./Images/ReadMoreTV.png" class="img-size" alt="ReadMoreTV"/>
                                    <br />
                                    <a href="https://github.com/jameygronewald/readMoreTV">GitHub Repository</a>
                                    <br />
                                    <a href="https://jameygronewald.github.io/readMoreTV/index.html">Deployed Website</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Creative Meet</h5>
                                        <br />
                                        <img src="./Images/CreativeMeet.jpg" class="img-size" alt="Creative Meet"></img>
                                        <br />
                                        <a href="https://github.com/pakmk/gt-project2">GitHub Repository</a>
                                        <br />
                                        <a href="https://creative-meet-project.herokuapp.com/">Deployed Website</a>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Workout Tracker</h5>
                                        <img src="./Images/workoutTracker.jpg" class="img-size" alt="workoutTracker"></img>
                                        <br />
                                        <a href="https://github.com/GTblue/workoutTracker">GitHub Repository</a>
                                        <br />
                                        <a href="https://standard-workout-tracker.herokuapp.com/">Deployed Website</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Password Generator</h5>
                                    <br />
                                    <img src="./Images/Password.png" class="img-size" alt="Password Generator"></img>
                                    <br />
                                    <a href="https://github.com/GTblue/Password-Generator">GitHub Repository</a>
                                    <br />
                                    <a href="https://gtblue.github.io/Password-Generator/">Deployed Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        );
    }
}

export default Project;