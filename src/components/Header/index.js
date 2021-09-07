import React from 'react';
import headerImage from "../../assets/header/header.png";
import Nav from '../Nav';

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header data-testid="header" className="flex-row top">
            <h2>
                <a href="/">
                    <img src={headerImage} className="my-2" style={{ width: "100%", height: "60%" }} alt="home" />
                </a>
                <Nav
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                    contactSelected={contactSelected}
                    currentCategory={currentCategory}
                    setContactSelected={setContactSelected}
                ></Nav>
            </h2>
        </header>
    );
}

export default Header;
