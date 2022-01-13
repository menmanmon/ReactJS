import { Form } from "../Form";
import { MessageList } from "../MessageList";
import { ChatsList } from "../ChatsList";
import "./Chats.css";
import { Navigate, useParams } from "react-router";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getMessagesList } from "../../store/selectors";
import { getChatMsgsListRefById } from "../../servises/firebase";
import { useCallback } from "react";
import { push } from "firebase/database";
import { addMessageWithFb } from "../../store/messages/actions";

export const Chats = ({ msgs }) => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector(getMessagesList, shallowEqual);

  //   const handleSendMessage = useCallback(
  //     (newMessage) => {
  //       push(getChatMsgsListRefById(chatId), newMessage);
  //     },
  //     [chatId]
  //   );

  //   const handleSendMessage = useCallback(
  //     (newMessage) => {
  //       dispatch(addMessageWithFb(chatId, newMessage));
  //     },
  //     [chatId]
  //   );
  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(addMessageWithFb(newMessage));
    },
    [chatId]
  );

  //   const handleSendMessage = useCallback(
  //     (newMessage) => {
  //       dispatch(addMessageWithFirebase(chatId, newMessage));
  //     },
  //     [chatId]
  //   );

  if (!msgs[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="app">
      <ChatsList />
      <div className="chat">
        <MessageList msgs={msgs[chatId]} />
        <Form onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
