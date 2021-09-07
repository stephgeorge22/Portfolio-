import React from 'react';
import aboutImage from "../../assets/about/about-image.JPG";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={aboutImage} className="my-2" style={{ width: "8%" }} alt="about me" />
            <p>A Full Stack Engineer pivoting to building the digital world from the physical world. With five years of professional experience and an Engineering degree, I am highly analytical, client/customer oriented and a true problem solver at heart. I recently earned a certificate in full stack development from the Rutgers Bootcamp, with a focus on JavaScript, bootstrap, node.js, express.js, and sequel. Thanks for stopping by my portfolio, feel free to browse to see how I’ve utilized my skills to write algorithms and create applications. </p>
        </section>
    );
}

export default About;