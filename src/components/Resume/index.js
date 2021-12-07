import React from 'react';

function Resume() {
    return (
        <section className="my-5">
            <h1>Resume</h1>

            <a href={require("../../assets/resume/StephanieGeorgeResume.pdf").default} download="StephanieGeorge_Resume.pdf">Download resume</a>

            <h3>Proficiences</h3>
            <ul>
                <li>Full Stack Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>Jquery</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Express</li>
                <li>Mongo</li>
                <li>Mongoose</li>
                <li>SQL</li>
                <li>NoSequal</li>
                <li>Sequelize</li>
                <li>Object Orienting Programming</li>
                <li>Graphql</li>
                <li>RESTful API</li>
                <li>MVC</li>
                <li>Bootstrap</li>
                <li>Materalize</li>
                <li>PWA</li>
                <li>Git</li>
                <li>Heroku</li>
            </ul>

        </section>
    )
}

export default Resume;