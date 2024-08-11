import React from 'react';
import Chatbox from '../components/Chatbox';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Welcome to the AI Chatbot</h1>
                <p>Interact with our AI-powered chatbot to get quick responses to your queries.</p>
            </header>
            <main>
                <Chatbox />
            </main>
        </div>
    );
}

export default HomePage;
