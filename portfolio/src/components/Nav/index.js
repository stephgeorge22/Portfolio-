import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <nav>
            <ul className="flex-row">

                {categories.map((category) => (
                    <li
                        className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                            }`}
                        key={category.name}
                    >
                        <span
                            onClick={() => {
                                setCurrentCategory(category)
                                setContactSelected(false);
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