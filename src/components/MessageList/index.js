import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

// export const MessageList = ({ messages }) => {
export const MessageList = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch()

    const { chatId } = useParams();

    console.log(state.messages[chatId])
    console.log(chatId);

    return (
        <div>
            {state.messages[chatId].map(mes => (
                <div key={mes.id}>
                    <span>{mes.author}</span>:
                    <span> {mes.text}</span>
                </div>
            ))}
            {/* {messages.map(mes => (
            <div key={mes.id}>
                <span>{mes.author}</span>:
                <span> {mes.text}</span>
            </div>
        ))} */}
        </div>
    );
}