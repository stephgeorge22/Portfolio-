// import React, { useState } from "react";
import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about">
                        About me
                    </a>
                </li>
                <li className="mx-2">
                    <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li
                        className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                            }`}
                        key={category.name}
                    >
                        <span
                            onClick={() => {
                                setCurrentCategory(category)
                            }}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;