import React from 'react';
// import doc from '../../assets/resume/resume.pdf'

function Resume() {
    return (
        <section className="my-5">
            <h1>Resume</h1>

            <a href={require("../../assets/resume/resume.pdf").default} download="StephanieGeorge_Resume.pdf">Download resume</a>

            <h3>Proficiences</h3>
            <ul>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Node</li>
                <li>Express</li>
                <li>Mongo</li>
                <li>Mongoose</li>
                <li>Sequal</li>
                <li>NoSequal</li>
                <li>Sequelize</li>
                <li>Graphql</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>PWA</li>
            </ul>

        </section>
    )
}

export default Resume;