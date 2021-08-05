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
                    <div className="col-sm-9 textLeft">
                        <p><strong>
                        Gregory Monroe II is my name, and I am a Full-Stack Web Developer. Currently, my skills involve building MERN & mobile-responsive JavaScript applications. 
                        <br/>
                        <br/>
                        In March of 2021, I joined GoDaddy as a Technical Support Representative. This comprises of fielding inbound calls and providing consultation to customers regarding new products and services that will help their business succeed. Daily, I get to troubleshoot GoDaddy’s products as needed in order to deliver stellar customer service.
                        <br/>
                        <br/>
                        Prior to joining the company, I was a self-employed musician back home in Central Florida. Being able to apply those analytical, logical, and methodical skills to this industry has been beneficial. In turn, I am able to produce results based on my work ethic.  
                        <br/>
                        <br/>
                        After moving to Atlanta, I earned a certificate in Full-Stack Web Development from the Georgia Institute of Technology. With this, I entered the technical field to explore my passion for coding, composition, and creativity.
                        <br/>
                        <br/>
                        My current hobbies include exploring new music, writing, and cooking. Being a life-long learner, I am always seeking opportunities to grow a career in web development and enterprising technologies around the Atlanta area, but I am also comfortable with remote work. 
                        <br/>
                        <br/>
                        I have completed a Full Stack Development course offered by the Georgia Institute of Technology working individually and collaboratively on applications and projects. My academic background also includes an Associate of Arts degree in Business Administration, and a Bachelor of Music in Music Performance specializing in classical piano.
                        </strong></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;