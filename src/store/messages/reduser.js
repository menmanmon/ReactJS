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
            // let chatId = payload.chatId;
            // console.log(payload.chatId);
            return { ...state, [payload.chatId]: [...state[payload.chatId], messageInfo] };
            // return { ...state, [payload.chatId]: [messageInfo] };
            // return { ...state, [payload.chatId]: [...state[payload.chatId], messageInfo] };
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