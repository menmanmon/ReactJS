import { onValue, remove, set } from "firebase/database";
import {
  chatsRef,
  getChatMsgsRefById,
  getChatRefById,
} from "../../servises/firebase";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const SET_CHATS = "CHATS::SET_CHATS";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

// export const addChat = (newChat) => ({
//   type: ADD_CHAT,
//   payload: newChat,
// });

// export const deleteChat = (chatId) => ({
//   type: DELETE_CHAT,
//   payload: chatId,
// });

export const addChatWithFb = (newChat) => (dispatch) => {
  set(getChatMsgsRefById(newChat.id),{ messageList: true });
  set(getChatRefById(newChat.id), newChat);
};

export const deleteChatWithFb = (chatId) => (dispatch) => {
  remove(getChatRefById(chatId));
  remove(getChatMsgsRefById(chatId));
};

export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const initChatsTracking = () => (dispatch) => {
  onValue(chatsRef, (chatsSnap) => {
    const newChats = [];
    chatsSnap.forEach((snap) => {
      newChats.push(snap.val());
    });
    dispatch(setChats(newChats));
  });
};
