import { useEffect } from 'react';
import { Form } from '../Form';
import { MessageList } from '../MessageList';
import { ChatsList } from '../ChatsList';
import { AUTHORS } from '../../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import './Chats.css';
import { Navigate, useParams } from 'react-router';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../store/messages/actions';
import { getMessagesList } from '../../store/selectors';

export const Chats = () => {
    const { chatId } = useParams();
    const messages = useSelector(getMessagesList, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        if (messages[chatId]?.length && messages[chatId]?.[messages[chatId]?.length - 1].author !== AUTHORS.bot) {
            const timeout = setTimeout(() => {
                dispatch(addMessage({
                    text: 'hi from bot',
                    author: AUTHORS.bot,
                    messageId: uuidv4(),
                    chatId: chatId,
                }))
            }, 1500);
            return () => clearTimeout(timeout);
        }
    });
    if (!messages[chatId]) {
        return <Navigate replace to='/chats' />
    }
    return (
        <div className="app">
            <ChatsList />
            <div className="chat">
                <MessageList />
                <Form />
            </div>
        </div>
    );
}

