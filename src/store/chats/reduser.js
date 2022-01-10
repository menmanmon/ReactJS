import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "./actions"

const initialChats = [];

export const chatsReduser = (state = initialChats, { type, payload }) => {
    switch (type) {
        case ADD_CHAT:
            return [...state, payload];
        case DELETE_CHAT:
            return state.filter(({ id }) => id !== payload);
        case SET_CHATS:
            return payload;
        default:
            return state;
    }
}
