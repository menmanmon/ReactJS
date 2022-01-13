import { Form } from "../Form";
import { MessageList } from "../MessageList";
import { ChatsList } from "../ChatsList";
import "./Chats.css";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addMessageWithFb } from "../../store/messages/actions";
import { getMessagesList } from "../../store/selectors";

export const Chats = () => {
  const messages = useSelector(getMessagesList);

  const { chatId } = useParams();
  const dispatch = useDispatch();
  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(addMessageWithFb(newMessage));
    },
    [chatId]
  );

  if (!messages.payload[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="app">
      <ChatsList />
      <div className="chat">
        <MessageList />
        <Form onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
