import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/reciplanner.jpg";


function Portfolio() {

    const work = {
        name: "ReciPlanner",
        description: "Express/Node/Sequelize",
        deployed: "https://reciplanner.herokuapp.com/",
        github: "https://github.com/stephgeorge22/reciplanner"
    };

    function changeBackground(e) {
        e.target.style.background = 'red'
    }

    return (
        <section>
            <h1>Portfolio</h1>
            <h1>{capitalizeFirstLetter(work.name)}</h1>
            <p>{work.name}</p>
            <div>
                <img 
                    onMouseEnter={changeBackground}
                    src={photo}
                    alt="ReciPlanner"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    )
}

export default Portfolio;