import { DELETE_CHAT } from "../chats/actions";
import { ADD_EMPTY_MESSAGE, ADD_MESSAGE, CHANGE_MESSAGES } from "./actions";

const initialMessages = {
  messages: {},
};

export const messagesReduser = (state = initialMessages, { type, payload }) => {
  switch (type) {
    case CHANGE_MESSAGES:
      let messageInfo = {
        text: payload.text,
        author: payload.author,
        messageId: payload.messageId,
      };
      // return { ...state, [payload.chatId]: [...state[payload.chatId], messageInfo] };
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.chatId]: messageInfo,
        },
      };
    case ADD_EMPTY_MESSAGE:
      return { ...state, [payload]: [] };
    case DELETE_CHAT:
      const newMessages = { ...state };
      delete newMessages[payload];
      return newMessages;
    default:
      return state;
  }
};

// export const messagesReduser = (state = initialMessages, { type, payload }) => {

//     switch (type) {
//         case ADD_MESSAGE:
//             let messageInfo = {
//                 text: payload.text,
//                 author: payload.author,
//                 messageId: payload.messageId,
//             }
//             return { ...state, [payload.chatId]: [...state[payload.chatId], messageInfo] };
//         case ADD_EMPTY_MESSAGE:
//             return { ...state, [payload]: [] }
//         case DELETE_CHAT:
//             const newMessages = { ...state };
//             delete newMessages[payload];
//             return newMessages
//         default:
//             return state;
//     }
// }
