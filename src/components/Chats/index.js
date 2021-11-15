import { useCallback, useEffect, useState } from 'react';
import { Form } from '../Form';
import { MessageList } from '../MessageList';
import { ChatsList } from '../ChatsList';
import { AUTHORS } from '../../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import './Chats.css';
import { Navigate, useParams } from 'react-router';

const initialMessages = {
    chat1: [
        {
            text: 'text1',
            author: AUTHORS.human,
        }
    ],
    chat2: [
        {
            text: 'text2',
            author: AUTHORS.human,
        }
    ],
    chat3: [],
};

export const Chats = () => {
    const { chatId } = useParams();
    const [messages, setMessages] = useState(initialMessages);

    const handleSendMessage = useCallback((newMessage) => {
        setMessages(prevMessages => ({ ...prevMessages, [chatId]: [...prevMessages[chatId], newMessage] }))
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
    if (!messages[chatId]) {
        return <Navigate replace to='/chats' />
    }
    const onAddChatClick = () => {
        let lastChatNumber = Object.keys(initialMessages).slice(-1).join().match(/\d+$/gi).join();
        let newChatId = `chat${+lastChatNumber + 1}`;
        console.log(newChatId);
        setMessages((oldChats) => ({ ...oldChats, newChatId: ['new chat'] }))
    };
    return (
        <div className="app">
            <ChatsList onAddChatClick={onAddChatClick} />
            <div className="chat">
                <MessageList messages={messages[chatId]} />
                <Form onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}

