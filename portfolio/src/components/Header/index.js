// import React from 'react';
import React, { useState } from "react";

import headerImage from "../../assets/header/header.png";
import Nav from '../Nav';

function Header() {

    const [categories] = useState([

        { name: "Portfolio", description: "A portfolio consisting of a few applications I've created" },
        { name: "Resume", description: "A detailed resume of my work", },
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <img src={headerImage} className="my-2" style={{ width: "100%", height: "60%" }} alt="home" />
                </a>
                <Nav
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                ></Nav>
            </h2>
        </header>
    );
}

export default Header;
