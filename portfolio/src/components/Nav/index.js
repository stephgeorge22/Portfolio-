import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

    const categories = [
        // { name: "About Me", description: "About me section", },
        { name: "Portfolio", description: "A portfolio consisting of a few applications I've created" },
        // { name: "Contact Me", description: "Contact me section" },
        { name: "Resume", description: "A detailed resume of my work", },
    ];

    const handleClick = () => {
        console.log("click handled")
    }

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => handleClick()}>
                        About me
                    </a>
                </li>
                <li className={"mx-2"}>
                    <span onClick={() => handleClick()}>
                        Contact
                    </span>
                </li>
                {
                    categories.map((category) => (
                        <li className="mx-1" key={category.name} >
                            <span onClick={() => { handleClick(); }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Nav;