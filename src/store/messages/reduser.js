import {
  SET_MESSAGES,
} from "./actions";

const initialMessages = {};

export const messagesReduser = (state = initialMessages, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES:
      return {
        ...state,
        payload,
      };
    // case ADD_EMPTY_MESSAGE:
    //   return { ...state, [payload]: [] };
    // case DELETE_CHAT:
    //   const newMessages = { ...state };
    //   delete newMessages[payload];
    //   return newMessages;
    default:
      return state;
  }
};