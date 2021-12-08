import { useState } from "react"
import { Link } from "react-router-dom"
import { signUp } from "../../servises/firebase"
import { SignForm } from "../SignForm"

export const SignUp = () => {
    const [error, setError] = useState('');
    const [loading, setLoadind] = useState(false);

    const handleSignUp = async (email, pass) => {
        setLoadind(true);
        try {
            await signUp(email, pass);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoadind(false);
        }
    }
    return (
        <>
            <h4>Sing up:</h4>
            <SignForm onSubmit={handleSignUp} error={error} loading={loading}></SignForm>
            <Link to="/">Sign In</Link>
        </>
    )
}