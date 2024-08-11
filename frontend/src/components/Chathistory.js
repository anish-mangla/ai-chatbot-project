import React from 'react';
import './ChatHistory.css';

function ChatHistory({ chatHistory }) {
    return (
        <div className="chat-history">
            {chatHistory.map((entry, index) => (
                <div key={index} className={`chat-message ${entry.role}`}>
                    <span>{entry.content}</span>
                </div>
            ))}
        </div>
    );
}

export default ChatHistory;
