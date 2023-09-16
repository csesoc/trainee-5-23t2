import './index.scss';
import React, { useState, useEffect } from 'react';
import BottomSearchBar from '../../Components/bottomSearchBar';
import MapView from '../../Components/MapView';
import { API_KEY } from "../../config";


/* const homePage = () => {
    return (
        <div>
            HI!
        </div>
    );
}; */

export default function Home() {
    return (
        <div className='map-container'>
            <MapView/>
            <h2> <a href = "/settings"> Settings </a> </h2>
        </div>
    );
}