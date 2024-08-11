import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <HomePage />
        </div>
    );
}

export default App;
