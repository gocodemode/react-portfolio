import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";

 class Project extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">ReadMeTV</h5>
                                    <br />
                                    <img src="./Images/ReadMoreTV.png" className="img-size" alt="ReadMoreTV"/>
                                    <br />
                                    <a href="https://github.com/jameygronewald/readMoreTV">GitHub Repository</a>
                                    <br />
                                    <a href="https://jameygronewald.github.io/readMoreTV/index.html">Deployed Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Creative Meet</h5>
                                        <br />
                                        <img src="./Images/CreativeMeet.jpg" className="img-size" alt="Creative Meet"></img>
                                        <br />
                                        <a href="https://github.com/pakmk/gt-project2">GitHub Repository</a>
                                        <br />
                                        <a href="https://creative-meet-project.herokuapp.com/">Deployed Website</a>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Workout Tracker</h5>
                                    <br />
                                    <img src="./Images/workoutTracker.jpg" className="img-size" alt="workoutTracker"></img>
                                    <br />
                                    <a href="https://github.com/GTblue/workoutTracker">GitHub Repository</a>
                                    <br />
                                    <a href="https://standard-workout-tracker.herokuapp.com/">Deployed Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Burger Application</h5>
                                    <br />
                                    <img src="./Images/Burger.png" className="img-size" alt="Password Generator"></img>
                                    <br />
                                    <a href="https://github.com/GTblue/burger">GitHub Repository</a>
                                    <br />
                                    <a href="https://gregz-burgerz.herokuapp.com/">Deployed Website</a>
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