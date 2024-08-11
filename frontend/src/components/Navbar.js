import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h2>AI Chatbot</h2>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
