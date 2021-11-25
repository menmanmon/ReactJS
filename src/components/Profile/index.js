import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeName, toggleCheckbox } from '../../store/profile/actions';
import { getPrifile } from '../../store/selectors';

export const Profile = () => {
    const state = useSelector(getPrifile, shallowEqual);
    const [value, setValue] = useState(state.name)
    const dispatch = useDispatch();

    const handleChangeText = (e) => {
        setValue(e.target.value);
    };
    const handleChange = () => {
        dispatch(toggleCheckbox)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeName(value));
    };
    return (
        <div>
            <h3>Profile</h3>
            <input type="checkbox" checked={state.checkbox} onChange={handleChange} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChangeText}></input>
                <input type="submit"></input>
            </form>
        </div>
    );
}