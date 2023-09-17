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

export default function Profile() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            
            
            <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold flex">Jeff Bezos</h1>
          <img src="johnnysins.jpg" alt="" className='flex' />
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flexss">
            Edit profile
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <img
            // src={avatarImage}
            alt="User Avatar"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <p className="text-xl font-semibold">Bio</p>
            <p className="text-gray-700">
              Hi my name is Jeff Bezos and I want to make a shipping company or something.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xl font-semibold">Posts</p>
          {/* Render user's posts here */}
          {/* You can map through an array of posts and display them */}
          {/* For brevity, we're not including post content in this example */}
        </div>
      </div>
    </div>
        </>
    );
}