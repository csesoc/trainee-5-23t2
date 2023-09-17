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
        <div style={{ zIndex: 1, position: 'fixed', bottom: 55, left: 0}}>
            <Link to="/profile" className='m-2'>
                <button>Profile</button>
            </Link>
        </div>
            <div className='button-container flex flex-row' style={{ zIndex: 1, position: 'fixed', top: 0, left: 0}}>
                <Link to="/login" className='m-2'>
                    <button>Login</button>
                </Link>
                <Link to="/signup" className='m-2'>
                    <button>Sign Up</button>
                </Link>
                <Link to="/about" className='m-2'>
                    <button>About</button>
                </Link>
                <Link to="/settings" className='m-2'>
                    <button>Settings</button>
                </Link>
            </div>

            <div className='sidebar-container w-1/5' style={{zIndex: 1, position: 'fixed', top:0, right:0}}>
                <div className='sidebar flex flex-col h-60 bg-white rounded-md m-2'>
                    <div className='m-2 font-bold'>
                        Recents
                    </div>
                    <div className = 'overflow-y-scroll'>
                        <div className='m-2'>
                            UNSW Kensington
                        </div>
                        <div className='m-2'>
                            Sydney Opera House
                        </div>
                        <div className='m-2'>
                            Hmu
                        </div>
                        <div className='m-2'>
                            Place 
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                    </div>
                </div>
            </div>

            <div className='sidebar-container w-1/5' style={{zIndex: 1, position: 'fixed', top:255, right:0}}>
                <div className='sidebar flex flex-col h-60 bg-white rounded-md m-2'>
                    <div className='m-2 font-bold'>
                        Favourites
                    </div>
                    <div className = 'overflow-y-scroll'>
                        <div className='m-2'>
                            Place
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                        <div className='m-2'>
                            Place 
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                        <div className='m-2'>
                            Place
                        </div>
                    </div>
                </div>
            </div>

            <div className='map-container' style={{ zIndex: 0, position: 'fixed', top: 0, left: 0}}>
                <MapView/>
            </div>
            <div className='bottom-searchbar-container' style={{ zIndex: 1, position: 'fixed', top: 60, left: 0}}>
                <BottomSearchBar />
            </div>
        </>
    );
}