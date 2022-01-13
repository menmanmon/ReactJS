import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { initMessageTracking } from "../../store/messages/actions";
import { getChatsList, getMessagesList } from "../../store/selectors";

// export const MessageList = ({ msgs }) => {
export const MessageList = () => {
  const messages = useSelector(getMessagesList);
  const state = useSelector((state) => state);
  const { chatId } = useParams();
  console.log(messages);
  console.log("------");
  if (!messages.payload[chatId]) {
    return <div></div>;
  }
  return (
    <div>
      {messages.payload[chatId].map((mes) => (
        <div key={mes.messageId}>
          <span>{mes.author}</span>:<span> {mes.text}</span>
        </div>
      ))}
    </div>
  );
  // return (
  //     <div>
  //       {msgs.map((mes) => (
  //         <div key={mes.messageId}>
  //           <span>{mes.author}</span>:<span> {mes.text}</span>
  //         </div>
  //       ))}
  //     </div>
  //   );
};
