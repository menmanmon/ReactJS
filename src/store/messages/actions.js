import { onValue, push, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import {
  db,
  getChatMsgsListRefById,
  getChatMsgsRefById,
  messagesRef,
} from "../../servises/firebase";
import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_EMPTY_MESSAGE = "MESSAGES::ADD_EMPTY_MESSAGE";
export const CHANGE_MESSAGES = "MESSAGES::CHANGE_MESSAGES";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

const getPayloadFromSnapshot = (snapshot) => {
  const messages = [];
  snapshot.forEach((mes) => {
    messages.push(mes.val());
  });
  return { chatId: snapshot.key, messages };
};

// export const addMessageWithFirebase = (chatId, message) => async () => {
//   db.ref("messages").child(chatId).child(message.id).set(message);
// };

export const addMessageWithFb = (message) => (dispatch) => {
  push(getChatMsgsListRefById(message.chatId), message);
  // console.log(message.chatId);
  // set(getChatMsgsRefById(message.chatId, message));
};

export const setMess = (newMess) => ({
  type: SET_MESSAGES,
  payload: newMess,
});

export const initMessageTracking = () => (dispatch) => {
  onValue(messagesRef, (messagesSnap) => {
    // console.log(messagesSnap._node.children_.root_.key);
    // const newMess = messagesSnap.val();
    const newMess = {};
    // console.log(messagesSnap.val());
    messagesSnap.forEach((snap) => {
      // console.log(Object.values(snap.val().messageList || {}));
      // console.log(snap.key);
      newMess[snap.key] = Object.values(snap.val().messageList || {});
    });
    dispatch(setMess(newMess));
    console.log(newMess);
  });
};

export const addMessage = (newMessageInfo) => ({
  type: ADD_MESSAGE,
  payload: newMessageInfo,
});

export const addEmptyMessage = (ChatId) => ({
  type: ADD_EMPTY_MESSAGE,
  payload: ChatId,
});

export const addMessageWithThunk = (newMessageInfo) => (dispatch) => {
  dispatch(addMessage(newMessageInfo));

  if (newMessageInfo.author !== "bot") {
    setTimeout(() => {
      const botMessageInfo = {
        author: AUTHORS.bot,
        text: "hi from bot",
        messageId: v4,
        chatId: newMessageInfo.chatId,
      };
      dispatch(addMessage(botMessageInfo));
    }, 1500);
  }
};
