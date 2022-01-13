import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "@mui/material/Button";
import "./ChatsList.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addChatWithFb,
  deleteChatWithFb,
  initChatsTracking,
} from "../../store/chats/actions";
import { getChatsList } from "../../store/selectors";

export const ChatsList = () => {
  const chatsList = useSelector(getChatsList, shallowEqual);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

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
    dispatch(addChatWithFb(newChat));
    setValue("");
  };
  const chat = chatsList.map((chat) => (
    <div key={chat.id} className="chatName">
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
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
