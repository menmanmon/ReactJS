import { useState } from "react"

export const SignForm = ({ onSubmit, error, loading }) => {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

    const hendleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email, pass);
    }

    return (
        <>
        <form onSubmit={hendleSubmit}>
            <input type='email' value={email} onChange={handleChangeEmail} placeholder='email...'></input>
            <input type='password' value={pass} onChange={handleChangePass} placeholder='password...'></input>
            <input type='submit' disabled={loading}></input>
        </form>
        {error && <h4>{error}</h4>}
        </>
    )
}