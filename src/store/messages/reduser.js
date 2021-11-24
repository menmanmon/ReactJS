import { useSelector } from "react-redux";
import { ADD_EMPTY_MESSAGE, ADD_MESSAGE } from "./actions";

const initialState = {
    chat12: [
        {
            text: 'text1',
            author: "AUTHORS.human",
        }
    ],
    chat13: [
        {
            text: 'text112',
            author: "AUTHORS.human",
        }
    ],
};

// const chats = useSelector(chatsList => chatsList)
export const messagesReduser = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_MESSAGE:
            return { ...state => ({ ...state, [payload.chatId]: [...state[payload.chatId], payload.info] }) };
        case ADD_EMPTY_MESSAGE:
            return { ...state, [payload]: [] }
        default:
            return state;
    }
}