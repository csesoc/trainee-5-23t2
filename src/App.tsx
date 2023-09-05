import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Pages/Home"
import About from "./Pages/About"
import { createBrowserRouter, BrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='App'>
        
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>

      </div>
    </>
  );
}

export default App;
