import { onValue, push } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { getChatMsgsListRefById, messagesRef } from "../../servises/firebase";
import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_EMPTY_MESSAGE = "MESSAGES::ADD_EMPTY_MESSAGE";
export const CHANGE_MESSAGES = "MESSAGES::CHANGE_MESSAGES";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const addMessageWithFb = (message) => (dispatch) => {
  push(getChatMsgsListRefById(message.chatId), message);
  if (message.author !== "bot") {
    setTimeout(() => {
      const botMessageInfo = {
        author: AUTHORS.bot,
        text: "hi from bot",
        messageId: uuidv4(),
        chatId: message.chatId,
      };
      push(getChatMsgsListRefById(message.chatId), botMessageInfo);
    }, 1500);
  }
};

export const setMess = (newMess) => ({
  type: SET_MESSAGES,
  payload: newMess,
});

export const initMessageTracking = () => (dispatch) => {
  onValue(messagesRef, (messagesSnap) => {
    const newMess = {};
    messagesSnap.forEach((snap) => {
      newMess[snap.key] = Object.values(snap.val().messageList || {});
    });
    dispatch(setMess(newMess));
  });
};

export const addMessage = (newMessageInfo) => ({
  type: ADD_MESSAGE,
  payload: newMessageInfo,
});

// export const addEmptyMessage = (ChatId) => ({
//   type: ADD_EMPTY_MESSAGE,
//   payload: ChatId,
// });

