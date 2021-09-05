import React from 'react';

function Nav() {

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;