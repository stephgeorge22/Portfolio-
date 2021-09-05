import React from 'react';

function Nav() {

    const categories = [
        { name: "About Me", description: "About me section", },
        { name: "Portfolio", description: "A portfolio consisting of a few applications I've created" },
        { name: "Contact Me", description: "Contact me section" },
        { name: "Resume", description: "A detailed resume of my work", },
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                        About me
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                {categories.map((category) => (
                    <li
                        className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                            }`}
                        key={category.name}
                    >
                        <span onClick={() => {
                            setCurrentCategory(category);
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