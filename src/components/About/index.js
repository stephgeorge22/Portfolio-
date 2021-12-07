import React from 'react';
import aboutImage from "../../assets/about/about-image.JPG";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={aboutImage} className="my-2" style={{ width: "8%" }} alt="about me" />
            <p>A Full Stack Engineer pivoting to building the digital world from the physical world (as a current Civil Engineer). With five years of professional experience and an Engineering degree, I am highly analytical, client/customer oriented and a true problem solver at heart. I’m excited to pursue my passion of building applications to improve the daily life of people while delivering an exceptional user-experience. I recently earned a certificate in full stack development from the Rutgers Bootcamp, with a focus in JavaScript, React, Node.js and Express.js. As an eager learner with a knack for facilitating collaboration, I’m looking forward to joining your team to continue to develop innovation and become a valuable asset! Keep broswing my portfolio to see how I’ve utilized my skills to write algorithms and create applications.  </p>
        </section>
    );
}

export default About;