import { onValue, set } from '@firebase/database';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { logOut, userRef } from '../../servises/firebase';
import { changeName, toggleCheckbox } from '../../store/profile/actions';
import { getPrifile } from '../../store/selectors';

export const Profile = () => {
    const state = useSelector(getPrifile, shallowEqual);
    const [value, setValue] = useState(state.name)
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            dispatch(changeName(userData?.name || ''));

        });
        return unsubscribe;
    }, [changeName]);

    const handleChangeText = (e) => {
        setValue(e.target.value);
    };
    const handleChange = () => {
        dispatch(toggleCheckbox)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        set(userRef, { name: value });
        // dispatch(changeName(value));
    };

    const handleSignOut = async () => {
        try {
            logOut()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <h3>Profile</h3>
            <input type="checkbox" checked={state.checkbox} onChange={handleChange} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChangeText}></input>
                <input type="submit"></input>
            </form>
            <button onClick={handleSignOut}>SIGN OUT</button>
        </div>
    );
}