import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <nav>
            <ul className="flex-row">

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