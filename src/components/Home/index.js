import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logIn } from "../../servises/firebase";
import { SignForm } from "../SignForm";

export const Home = () => {
    const [error, setError] = useState('');
    const [loading, setLoadind] = useState(false);

    const hendleSignIn = async (email, pass) => {
        setLoadind(true);
        try {
            await logIn(email, pass);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoadind(false);
        }
    };

    return (
        <>
            <h3>Home</h3>
            <h4>Sign in:</h4>
            <SignForm onSubmit={hendleSignIn} error={error} loading={loading} />
            <Link to="signup">Sign Up</Link>
        </>
    )
};