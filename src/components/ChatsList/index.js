import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ChatsList = () => {
    const [chats, setChats] = useState([
        {
            name: 'chat 1',
            id: 'chat1',
        },
        {
            name: 'chat 2',
            id: 'chat2',
        },
        {
            name: 'chat 3',
            id: 'chat3',
        },
    ]);
    const chat = chats.map((chat) => <Link to={`/chats/${chat.id}`} key={chat.id}>{chat.name}</Link>)
    return (
        <div>
            <h3>Chats List</h3> 
            <ul className="chatsList">
                {chat}
            </ul>
        </div>
    );
}