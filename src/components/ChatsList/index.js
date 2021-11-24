import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '@mui/material/Button';
import './ChatsList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../store/chats/actions';
import { addEmptyMessage } from '../../store/messages/actions';

export const ChatsList = ({ chatsList, onAddChat, onDeleteChat }) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = `chat${Date.now()}`;
        let newChat =
        {
            name: value,
            id: newId
        };
        dispatch(addChat(newChat));
        dispatch(addEmptyMessage(newId));
        setValue('');
    }
    const chat = state.chats.map((chat) =>
        <div className="chatName">
            <Link to={`/chats/${chat.id}`} key={chat.id}>{chat.name}</Link>
            <p>{chat.id}</p>
            <button onClick={() => dispatch(deleteChat(chat.id))}>Delete</button>
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