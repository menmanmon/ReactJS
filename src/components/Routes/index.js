import React from 'react';
import { BrowserRouter, Link } from "react-router-dom"
import { PersistGate } from "redux-persist/lib/integration/react"
import { Articles } from "../Articles"
import { Chats } from "../Chats"
import { ChatsList } from "../ChatsList"
import { Home } from "../Home"
import { Profile } from "../Profile"
import { Route, Routes } from 'react-router';
import { persistor } from '../../store';
import { PublicRoute } from '../PublicRoute';
import { PrivateRoute } from '../PrivateRoute';
import { SignUp } from '../SignUp';


export const Router = () => {
    return (
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
                    <Route path='/' element={
                        <PublicRoute>
                            <Home />
                        </PublicRoute>}
                    />
                    <Route path='/signup' element={
                        <PublicRoute>
                            <SignUp />
                        </PublicRoute>}
                    />
                    <Route path='chats'>
                        <Route index element={
                            <PrivateRoute>
                                <ChatsList />
                            </PrivateRoute>
                        }
                        />
                        <Route path=':chatId' element={
                            <PrivateRoute>
                                <Chats />
                            </PrivateRoute>
                        }
                        />
                    </Route>
                    <Route path='/profile' element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>}
                    />
                    <Route path='/articles' element={<Articles />} />
                    <Route path='*' element={<h3>404</h3>} />
                </Routes>
            </BrowserRouter>
        </PersistGate>
    )
}