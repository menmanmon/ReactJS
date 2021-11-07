import React, { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AUTHORS } from '../utils/constants';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';

export const Form = ({ onSendMessage }) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage({
            text: value,
            author: AUTHORS.human,
            id: uuidv4(),
        })
        setValue('');
    }
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current?.focus();
    }, [handleSubmit]);
    return (
        <form onSubmit={handleSubmit}>
            {/* почему-то не фокусируется на инпуте им mui */}
            {/* <Input autoFocus ref={inputRef} placeholder="Type here..." value={value} onChange={handleChange} /> */}
            <input ref={inputRef} placeholder="Type here..." value={value} onChange={handleChange} />
            <Button size="small" type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </form>
    );
}