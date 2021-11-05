import { useCallback, useEffect, useState } from 'react';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import { AUTHORS } from './utils/constants';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export default function App() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = useCallback((newMessage) => {
        setMessages(prevMessages => [...prevMessages, newMessage])
    }, [])
    useEffect(() => {
        if (messages.length && messages[messages.length - 1].author !== AUTHORS.bot) {
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
        <div className="App">
            <MessageList messages={messages} />
            <Form onSendMessage={handleSendMessage} />
        </div>
    );
}

