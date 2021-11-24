import { useCallback, useEffect, useState } from 'react';
import { Form } from '../Form';
import { MessageList } from '../MessageList';
import { ChatsList } from '../ChatsList';
import { AUTHORS } from '../../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import './Chats.css';
import { Navigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../store/messages/actions';

export const Chats = ({ chatsList, setChatsList, messages, setMessages, onAddChat, onDeleteChat }) => {
    const { chatId } = useParams();

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    // const handleSendMessage = useCallback((newMessage) => {
    //     setMessages(prevMessages => ({
    //         ...prevMessages, [chatId]: [...prevMessages[chatId], newMessage]
    //     }));
    // }, [chatId]);
    const handleSendMessage = useCallback((newMessage) => {
        dispatch(addMessage(newMessage))
    }, [chatId]);
    
    useEffect(() => {
        if (messages[chatId]?.length && messages[chatId]?.[messages[chatId]?.length - 1].author !== AUTHORS.bot) {
            const timeout = setTimeout(() => {
                handleSendMessage({
                    author: AUTHORS.bot,
                    text: 'hi from bot',
                    id: uuidv4(),
                })
            }, 1500);
            return () => clearTimeout(timeout);
        }
    }, [messages]);
    // if (!messages[chatId]) {
    //     return <Navigate replace to='/chats' />
    // }
    return (
        <div className="app">
            <ChatsList
                onAddChat={onAddChat}
                onDeleteChat={onDeleteChat}
                chatsList={chatsList}
                setChatsList={setChatsList}
            />
            <div className="chat">
                {/* <MessageList messages={messages[chatId]} /> */}
                <MessageList />
                <Form onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}

