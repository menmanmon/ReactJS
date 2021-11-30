import React from 'react';
import { Provider } from 'react-redux';
import { Chats } from './components/Chats';
import { ChatsList } from './components/ChatsList';
import { Home } from './components/Home';
import { Articles } from './components/Articles';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Profile } from './components/Profile';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
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
                        <li>
                            <Link to='/articles'>Articles</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='chats'>
                            <Route index element={<ChatsList />} />
                            <Route path=':chatId' element={<Chats />} />
                        </Route>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/articles' element={<Articles />} />
                        <Route path='*' element={<h3>404</h3>} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}