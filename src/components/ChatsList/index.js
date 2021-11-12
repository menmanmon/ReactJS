import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '@mui/material/Button';

export const ChatsList = (props) => {
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
            <CustomButton onClick={props.onAddChatClick} >Add chat</CustomButton>
            <ul className="chatsList">
                {chat}
            </ul>
        </div>
    );
}