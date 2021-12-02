import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getMessagesList } from '../../store/selectors';

export const MessageList = () => {
    const messages = useSelector(getMessagesList, shallowEqual);
    const { chatId } = useParams();

    return (
        <div>
            {messages[chatId].map(mes => (
                <div key={mes.messageId}>
                    <span>{mes.author}</span>:
                    <span> {mes.text}</span>
                </div>
            ))}
        </div>
    );
}