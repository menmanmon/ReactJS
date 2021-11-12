import React from 'react';
import { Chats } from './components/Chats';
import { ChatsList } from './components/ChatsList';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Profile } from './components/Profile';

export const App = () => {
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
                    <Route index element={<ChatsList />} />
                    <Route path=':chatId' element={<Chats />} />
                </Route>
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<h3>404</h3>} />
            </Routes>
        </BrowserRouter>
    );
}