import React, { useState, useEffect } from 'react';
import './index.scss';
import { auth, app } from '../../firebase'
import { onAuthStateChanged, signOut, deleteUser, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Settings() {

    const navigate = useNavigate('');
    const user = auth.currentUser;

    const[message, setMessage] = useState('');

    const ResetPassword = (e) => {
        e.preventDefault();
        const user = auth.currentUser;

        sendPasswordResetEmail(auth, user.email)
        .then(() => {
            setMessage("Reset Email Sent!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const SignOut = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {

        });
    }

    const DeleteUser = (e) => {
        e.preventDefault();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        });
    }


    return (
        <>
        <Link to="/">
            <button>Home</button>
        </Link>
        <div class="background3">
        <div className="container-signin3">
        <section class = "wrapper3">
            <div class="heading">
                <h1 class="text text-large"><strong>User Settings</strong></h1>
            </div>
            <form onSubmit={ResetPassword}>
                <button type="submit" name="submit" class="input-submit">Reset Password</button>
            </form>

            <form onSubmit={SignOut}>
                <button type="submit" name="submit" class="input-submit">Sign Out</button>
            </form>
            <form onSubmit={DeleteUser}>
                <button type="submit" name="submit" class="input-submit">Delete Account</button>
            </form>
            <h3> {message} </h3>
        </section>
        </div>
        </div>
        
        </>
    );
}