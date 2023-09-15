import './index.scss';
import React, { useState, useEffect } from 'react';


export default function Login() {
    return (
        <>
        <div className="container-signin">
        <section class = "wrapper">
            <div class="heading">
                <h1 class="text text-large"><strong>Sign In</strong></h1>
                <p class="text text-normal"> New user? <span> <a href="/signup" class="text text-links">Create an accounts</a></span></p>
            </div>
            <form>
                <div class="input-control">
                    <input
                        type="email" placeholder="Enter your email" class="input-field">
                    </input>
                </div>
                <div class="input-control">
                    <input
                        type="password" placeholder="Enter your password" class="input-field">
                    </input>
                </div>
                <button type="submit" name="submit" class="input-submit" value="Sign In">Sign In</button>
            </form>
        </section>
        </div>
        </>
    );
}