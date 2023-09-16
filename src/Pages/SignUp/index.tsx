import React, { useState, useEffect } from 'react';
import './index.scss';
import { auth, app } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function SignUp() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate('');

    const [errorMessage, setErrorMessage] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/login")
        })
        .catch((error) => {
            if (error.code == "auth/email-already-in-use") {
                setErrorMessage("Email already in use");
            } else if (error.code == "auth/weak-password") {
                setErrorMessage("Password must contain at least 6 characters");
            } else if (error.code == "auth/invalid-email") {
                setErrorMessage("Invalid Email")
            } else if (error.code == "auth/missing-password") {
                setErrorMessage("Missing Password")
            } else if (error.code == "auth/missing-email") {
                setErrorMessage("Missing")
            } else {
                setErrorMessage(error.code);
            }
            console.log(error.code);
        });
    }

    return (
        <>
        <Link to="/">
            <button>Home</button>
        </Link>
        <div className="container-signin">
        <section class = "wrapper">
            <div class="heading">
                <h1 class="text text-large"><strong>Register</strong></h1>
                <p class="text text-normal"> Already a user? <span> <a href="/login" class="text text-links">Log in</a></span></p>
            </div>
            <form onSubmit={signUp}>
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
                <button type="submit" name="submit" class="input-submit" value="Sign In">Submit</button>
                <div> {errorMessage} </div>
            </form>
        </section>
        </div>
        </>
    );
}