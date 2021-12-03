import { DELETE_CHAT } from "../chats/actions";
import { ADD_EMPTY_MESSAGE, ADD_MESSAGE } from "./actions";

const initialMessages = {};

export const messagesReduser = (state = initialMessages, { type, payload }) => {

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
        case DELETE_CHAT:
            const newMessages = { ...state };
            delete newMessages[payload];
            return newMessages
        default:
            return state;
    }
}