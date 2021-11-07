import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ChatsList = () => {
    const [chats, setChats] = useState([
        {
            name: 'chat 1',
            id: uuidv4(),
        },
        {
            name: 'chat 2',
            id: uuidv4(),
        },
        {
            name: 'chat 3',
            id: uuidv4(),
        },
    ]);
    const chat = chats.map((chat) => <li key={chat.id}>{chat.name}</li>)
    return (
        <div className="chatsList"><ul>{chat}</ul></div>
    );
}