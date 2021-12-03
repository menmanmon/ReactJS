import { Form } from '../Form';
import { MessageList } from '../MessageList';
import { ChatsList } from '../ChatsList';
import './Chats.css';
import { Navigate, useParams } from 'react-router';
import { shallowEqual, useSelector } from 'react-redux';
import { getMessagesList } from '../../store/selectors';

export const Chats = () => {
    const { chatId } = useParams();
    const messages = useSelector(getMessagesList, shallowEqual);

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

