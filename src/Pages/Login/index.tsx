import React, { useState, useEffect } from 'react';
import './index.scss';
import { auth, app } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate('');

    const [errorMessage, setErrorMessage] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/")
        })
        .catch((error) => {
            if (error.code == "auth/invalid-login-credentials") {
                setErrorMessage("Invalid Login");
            } else if (error.code == "auth/missing-password") {
                setErrorMessage("Missing Password")
            } else if (error.code == "auth/missing-email") {
                setErrorMessage("Missing Email")
            } else {
                setErrorMessage(error.message);
            }
            console.log(error.code)
        });
    }

    return (
        <>
        <div className="container-signin">
        <section class = "wrapper">
            <div class="heading">
                <h1 class="text text-large"><strong>Sign In</strong></h1>
                <p class="text text-normal"> New user? <span> <a href="/signup" class="text text-links">Create an accounts</a></span></p>
            </div>
            <form onSubmit={signIn}>
                <div class="input-control">
                    <input
                        type="email" placeholder="Enter your email" value = {email} onChange = {(e) => setEmail(e.target.value)} class="input-field">
                    </input>
                </div>
                <div class="input-control">
                    <input
                        type="password" placeholder="Enter your password" value = {password} onChange = {(e) => setPassword(e.target.value)} class="input-field">
                    </input>
                </div>
                <button type="submit" name="submit" class="input-submit" value="Sign In">Sign In</button>
            </form>
            <div> {errorMessage} </div>
        </section>
        </div>
        </>
    );
}