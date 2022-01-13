import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AUTHORS } from "../../utils/constants";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { initMessageTracking } from "../../store/messages/actions";

export const Form = ({ onSendMessage }) => {
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage({
      text: value,
      author: AUTHORS.human,
      messageId: uuidv4(),
      chatId: chatId,
    });
    setValue("");
    inputRef.current?.focus();
  };

  useEffect(() => {
      dispatch(initMessageTracking());
  }, []);

  const inputRef = useRef(null);
  return (
    <form onSubmit={handleSubmit}>
      <Input
        autoFocus
        inputRef={inputRef}
        placeholder="Type here..."
        value={value}
        onChange={handleChange}
      />
      <Button
        size="small"
        type="submit"
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </form>
  );
};
