// import React, { useState } from 'react';
import React from 'react';

// import photo from '../../assets/small/reciplanner.jpg';
import Card from 'react-bootstrap/Card'

const Project = (props) => {
    

    return (
        <Card className="bg-dark text-white">
            {/* <Card.Img src={props.image} alt={props.alt} /> */}
            <Card.Img src={require(`../../assets/small/${props.image}.png`).default} alt={props.alt} />
            <Card.ImgOverlay>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Project;