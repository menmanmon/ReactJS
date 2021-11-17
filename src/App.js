import React, { useState, useCallback } from 'react';
import { Chats } from './components/Chats';
import { ChatsList } from './components/ChatsList';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Profile } from './components/Profile';
import { AUTHORS } from './utils/constants';

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

const initialChatsList = [
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
];

export const App = () => {
    const [chatsList, setChatsList] = useState(initialChatsList);
    const [messages, setMessages] = useState(initialMessages);

    const handleAddChat = useCallback((name) => {
        const newId = `chat${Date.now()}`;
        setChatsList((prevChatslists => [...prevChatslists, { name, id: newId }]));
        setMessages((prevMessages) => ({ ...prevMessages, [newId]: [], }));
    }, []);
    const handleDeleteChat = useCallback((idToDelete) => {
        setChatsList(prevChatslists => prevChatslists.filter(({ id }) => id !== idToDelete));
        setMessages((prevMessages) => {
            const newMessages = { ...prevMessages };
            delete newMessages[idToDelete];
            return newMessages;
        });
    }, []);

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/chats'>Chats</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='chats'>
                    <Route index element={
                        <ChatsList
                            chatsList={chatsList}
                            setChatsList={setChatsList}
                            onAddChat={handleAddChat}
                            onDeleteChat={handleDeleteChat}

                        />
                    }
                    />
                    <Route path=':chatId' element={
                        <Chats
                            chatsList={chatsList}
                            messages={messages}
                            setMessages={setMessages}
                            setChatsList={setChatsList}
                            onAddChat={handleAddChat}
                            onDeleteChat={handleDeleteChat}
                        />
                    }
                    />
                </Route>
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<h3>404</h3>} />
            </Routes>
        </BrowserRouter>
    );
}