import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMessagesList } from "../../store/selectors";

export const MessageList = () => {
  const messages = useSelector(getMessagesList);
  const { chatId } = useParams();
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
};
