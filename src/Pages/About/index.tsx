import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

/* const aboutPage = () => {
    return (
        <div>
            HI!
        </div>
    );
}; */

export default function About() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <div>
      <h1>About Our Campus Map App</h1>
      <p>Welcome to our Campus Map App! This app is designed to help you navigate our beautiful campus with ease.</p>

      <h2>Features</h2>
      <ul>
        <li>Interactive Map: Explore our campus using an interactive map with detailed information about buildings, landmarks, and facilities.</li>
        <li>Search Functionality: Easily search for specific buildings or locations on campus.</li>
        <li>Directions: Get step-by-step directions to your desired destination on campus.</li>
      </ul>

      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or suggestions, feel free to contact us:</p>
      <ul>
        <li>Email: contact@campusmapapp.com</li>
        <li>Phone: (123) 456-7890</li>
      </ul>

      <p>We hope you find our Campus Map App helpful in navigating UNSW and making the most of your time here. Enjoy exploring!</p>
    </div>
        </>
    );
}