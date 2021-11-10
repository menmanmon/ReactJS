import { useCallback, useEffect, useState } from 'react';
import { Form } from '../Form';
import { MessageList } from '../MessageList';
import { ChatsList } from '../ChatsList';
import { AUTHORS } from '../../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import './Chats.css';
import { useParams } from 'react-router';

const initialMessages = {
    chat1: [
        {
            text: 'text1',
            author: AUTHORS.human,
        }
    ],
    chat2: [
        {
            text: 'text1',
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
    }, [chatId])
    useEffect(() => {
        if (messages[chatId].length && messages[chatId][messages[chatId].length - 1].author !== AUTHORS.bot) {
            const timeout = setTimeout(() => {
                handleSendMessage({
                    author: AUTHORS.bot,
                    text: 'hi from bot',
                    id: uuidv4(),
                })
            }, 1500);
            return () => clearTimeout(timeout);
        }
    }, [messages])
    return (
        <div className="app">
            <ChatsList />
            <div className="chat">
                <MessageList messages={messages[chatId]} />
                <Form onSendMessage={handleSendMessage} />
            </div>
        </div>
    );

}

