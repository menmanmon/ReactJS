import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export const MessageList = ({msgs}) => {
    const state = useSelector(state => state);
    const { chatId } = useParams();
    return (
        <div>
            {msgs.map((mes) => (
                <div key={mes.messageId}>
                    <span>{mes.author}</span>:
                    <span> {mes.text}</span>
                </div>
            ))}
        </div>
    );
}