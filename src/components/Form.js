import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AUTHORS } from '../utils/constants';

export const Form = ({onSendMessage}) => {
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
        // console.log(this.id);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type here..." value={value} onChange={handleChange} />
            <input type="submit" />
        </form>
    );
}