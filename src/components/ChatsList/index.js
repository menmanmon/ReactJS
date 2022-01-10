import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "@mui/material/Button";
import "./ChatsList.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addChatWithFb,
  deleteChatWithFb,
  deleteChat,
  initChatsTracking,
} from "../../store/chats/actions";
import {
  addEmptyMessage,
  initMessageTracking,
} from "../../store/messages/actions";
import { getChatsList } from "../../store/selectors";
import { onValue, set } from "@firebase/database";
import {
  chatsRef,
  getChatMsgsRefById,
  getChatRefById,
} from "../../servises/firebase";

export const ChatsList = () => {
  // const [chats, setChats] = useState([]);
  const chatsList = useSelector(getChatsList, shallowEqual);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  // useEffect(() => {
  //     onValue(chatsRef, (chatsSnap) => {
  //         const newChats = [];

  //         chatsSnap.forEach((snap) => {
  //             console.log(snap);
  //             newChats.push(snap.val());
  //         });
  //         setChats(newChats);
  //     });
  // }, []);

  useEffect(() => {
    dispatch(initChatsTracking());
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = `chat${Date.now()}`;
    let newChat = {
      name: value,
      id: newId,
    };
    // set(getChatMsgsRefById(newId), { empty: true });
    // set(getChatRefById(newId), newChat);
    dispatch(addChatWithFb(newChat));
    // dispatch(addEmptyMessage(newId));
    setValue("");
  };
//   const dltChat = (e) => {
//     // dispatch(deleteChatWithFb(chatId));
//     console.log(chatsList);
//   };
  const chat = chatsList.map((chat) => (
    <div key={chat.id} className="chatName">
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
      {/* <button onClick={() => dispatch(deleteChat(chat.id))}>Delete</button> */}
      {/* <button onClick={dltChat}>Delete</button> */}
      <button onClick={() => dispatch(deleteChatWithFb(chat.id))}>Delete</button>
    </div>
  ));
  return (
    <div className="chatsList">
      <h3>Chats List</h3>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type="text"></input>
        <CustomButton type="submit">Add chat</CustomButton>
      </form>
      <ul className="chatsList">{chat}</ul>
    </div>
  );
};
