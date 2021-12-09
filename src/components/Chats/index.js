import { Form } from '../Form';
import { MessageList } from '../MessageList';
import { ChatsList } from '../ChatsList';
import './Chats.css';
import { Navigate, useParams } from 'react-router';
import { shallowEqual, useSelector } from 'react-redux';
import { getMessagesList } from '../../store/selectors';

export const Chats = ({msgs}) => {
    const { chatId } = useParams();
    const messages = useSelector(getMessagesList, shallowEqual);

    if (!msgs[chatId]) {
        return <Navigate replace to='/chats' />
    }
    console.log(msgs[chatId]);
    console.log(msgs);

    return (
        <div className="app">
            <ChatsList />
            <div className="chat">
                <MessageList msgs={msgs[chatId]} />
                <Form />
            </div>
        </div>
    );
}

