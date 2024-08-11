import React, { useState } from 'react';
import ChatHistory from './components/ChatHistory';
import chatService from '../services/chatService'; // Import the chatService
import './Chatbox.css';

function Chatbox() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = async () => {
        if (message.trim() === '') return;

        const userMessage = {
            role: 'user',
            content: message,
        };

        setChatHistory([...chatHistory, userMessage]);
        setMessage('');

        try {
            const botResponse = await chatService.sendMessage(message);
            const botMessage = {
                role: 'bot',
                content: botResponse,
            };

            setChatHistory((prevHistory) => [...prevHistory, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chatbox">
            <ChatHistory chatHistory={chatHistory} />
            <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={handleMessageChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
}

export default Chatbox;
