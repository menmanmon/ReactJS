import React from 'react';

export const MessageList = ({ messages }) => {
    return (
    <div>
        {messages.map(mes => (
            <div key={mes.id}>
                <span>{mes.author}</span>:
                <span> {mes.text}</span>
            </div>
        ))}
    </div>
    );
}