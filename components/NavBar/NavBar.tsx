import React from 'react';

function NavBar() {
    return (
        <nav>
            <div className="nav-left">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="nav-middle">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="nav-right">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;