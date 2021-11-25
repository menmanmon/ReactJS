import { ADD_EMPTY_MESSAGE, ADD_MESSAGE } from "./actions";

const initialState = {};

export const messagesReduser = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_MESSAGE:
            let messageInfo = {
                text: payload.text,
                author: payload.author,
                messageId: payload.messageId,
            }
            let chatId = payload.chatId;
            return { ...state, [chatId]: [...state[chatId], messageInfo] };
        case ADD_EMPTY_MESSAGE:
            return { ...state, [payload]: [] }
        default:
            return state;
    }
}