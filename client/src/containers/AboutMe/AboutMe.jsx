import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="top">About Me</h2>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-sm-5">
                        <img src="../Images/Gregory.jpg" alt="Gregory Monroe II" class="img-thumbnail" />
                    </div>
                    <div class="col-sm-7">
                        <p><strong>
                            Gregory Monroe II is currently enrolled in the Full-Stack Developer Coding Program at Georgia Institute of Technology. Previous to that, he has been playing the piano for almost 25 years. With international private study, Gregory has gone on to become an accomplished musician and highly-skilled performer in several arenas (Classical Pianist, Composer, Accompanist, Vocalist, Percussionist and Music Director). Gregory attained his Bachelor’s degree in Music Performance from the University of Central Florida. Currently, he is accompanying vocal and instrumental soloists as well as choral and instrumental ensembles for recitals, performance assessments, church services and recordings at home in Central Florida.
                        </strong></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;