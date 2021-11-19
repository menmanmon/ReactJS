import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCheckbox } from '../../store/profile/actions';

export const Profile = () => {
    // const state = store.getState();
    const state = useSelector(state => state);
    const dispatch = useDispatch();


    console.log(state);

    const handleChange = () => {
        dispatch(toggleCheckbox)
    }
    return (
        <div>
            <h3>Profile</h3>
            <input type="checkbox" checked={state.checkBox} onChange={handleChange} />
            <span>{state.name}</span>
        </div>
    );
}