import './index.scss';
import React, { useState, useEffect } from 'react';
import BottomSearchBar from '../../Components/bottomSearchBar';
import MapView from '../../Components/MapView';
import { API_KEY } from "../../config";
import { Link } from 'react-router-dom';


/* const homePage = () => {
    return (
        <div>
            HI!
        </div>
    );
}; */

export default function Home() {
    return (
        <>
            <div className='button-container m-2' style={{ zIndex: 1, position: 'fixed'}}>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Link to="/about">
                    <button>About</button>
                </Link>
            </div>
            <div className='map-container' style={{ zIndex: -1 }}>
                <MapView/>
            </div>
        </>
    );
}