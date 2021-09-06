// import React, { useState } from 'react';
import React from 'react';

// import photo from '../../assets/small/reciplanner.jpg';
import Card from 'react-bootstrap/Card'

const Project = (props) => {

    return (
        <Card style={{ width: '18rem' }} className="bg-dark text-white">
            <Card.Img src={require(`../../assets/small/${props.image}.png`).default} alt={props.alt} />
            <Card.ImgOverlay>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <a href={props.github}><img class="project-icon" src="https://img.icons8.com/material-outlined/96/000000/github.png" alt="GitHub Repo" /> </a>
                <a href={props.deployed}><img class="project-icon" src="https://img.icons8.com/clouds/100/000000/domain.png" alt="Live Application" /></a>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Project;