import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { db } from "../../servises/firebase";
import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_EMPTY_MESSAGE = "MESSAGES::ADD_EMPTY_MESSAGE";
export const CHANGE_MESSAGES = "MESSAGES::CHANGE_MESSAGES";

// const getPayloadFromSnapshot = (snapshot) => {
//   const messages = [];
//   snapshot.forEach((mes) => {
//     messages.push(mes.val());
//   });
//   return { chatId: snapshot.key, messages };
// };

// export const addMessageWithFirebase = (chatId, message) => async () => {
//   db.ref("messages").child(chatId).child(message.id).set(message);
// };

// export const initMessageTracking = () => (dispatch) => {
//   db.ref("messages").on("chid_changed", (snapshot) => {
//     const payload = getPayloadFromSnapshot(snapshot);
//     dispatch({
//       type: CHANGE_MESSAGES,
//       payload,
//     });
//   });
//   db.ref("messages").on("chid_added", (snapshot) => {
//     const payload = getPayloadFromSnapshot(snapshot);
//     dispatch({
//       type: CHANGE_MESSAGES,
//       payload,
//     });
//   });
// };

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
