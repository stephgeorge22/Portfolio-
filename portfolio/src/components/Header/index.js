import React from 'react';

import headerImage from "../../assets/header/header.png";
import Nav from '../Nav';

function Header() {



    return (
        <header >
        <h2>
                <a href="/">
                <img src={headerImage} className="my-2" style={{ width: "100%", height: "20%"}} alt="home" />
                </a>
                <Nav></Nav>
            </h2>
        </header>
    );
}

export default Header;
