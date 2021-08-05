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
                        I am Gregory Monroe II and I am a certified Full-Stack Web Developer. I earned my certification at Georgia Institute of Technology. Currently, my core skills include building MERN & mobile-responsive JavaScript applications. 
                        <br/>
                        <br/>
                        I joined GoDaddy as a Technical Support Representative in March 2021. In this position, I interview and listen to clients to identify their needs or concerns and provide effective solutions to address their problems. Additionally, I recommend new products and services that will help their business achieve higher levels of success.
                        <br/>
                        <br/>
                        Prior to joining GoDaddy, I earned a Bachelor of Music in Music Performance at the University of Central Florida. Upon graduation, I was a self-employed musician in Central Florida. In the performance arts, I directed and played piano to accompany various theater productions, non-profit organizations and ecumenical services. My musical talents and skills have been great assets to help me transition and thrive in the technology field.  
                        <br/>
                        <br/>
                        My current hobbies include new music from singer-songwriters, writing graphic novels and cooking. Being a life-long learner, I am always seeking opportunities to gain experience in web development and enterprising technologies the Atlanta area. Also, I am comfortable with remote work.
                        <br/>
                        <br/>
                        My Full-Stack Web Development course at Georgia Institute of Technology provided several real-world opportunities to work individually and collaboratively on applications and projects.
                        <br/>
                        </strong></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;