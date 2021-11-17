import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '@mui/material/Button';
import './ChatsList.css';

export const ChatsList = ({ chatsList, onAddChat, onDeleteChat }) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddChat(value);
        setValue('');
    }
    const chat = chatsList.map((chat) =>
        <div className="chatName">
            <Link to={`/chats/${chat.id}`} key={chat.id}>{chat.name}</Link>
            <button onClick={() => onDeleteChat(chat.id)}>Delete</button>
        </div>)
    return (
        <div className="chatsList">
            <h3>Chats List</h3>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={handleChange} type="text"></input>
                <CustomButton type="submit" >Add chat</CustomButton>
            </form>
            <ul className="chatsList">
                {chat}
            </ul>
        </div>
    );
}