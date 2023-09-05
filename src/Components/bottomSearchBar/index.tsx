import './index.scss';
import React, { useEffect, useState } from 'react';

const BottomSearchBar = () => {
    // Add state to manage search input
    const [searchInput, setSearchInput] = useState('');
  
    // Function to handle search input changes
    const handleInputChange = (e) => {
      setSearchInput(e.target.value);
    };
  
    // Function to handle search submission
    const handleSearchSubmit = () => {
      // Implement your search functionality here
      console.log('Searching for:', searchInput);
    };
  
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
        <div className="max-w-screen-lg mx-auto">
        <div className="flex items-center justify-between">

            <div className="flex md:w-3/4">
            <input
                type="text"
                className="w-full bg-gray-900 text-white rounded-md py-2 px-3 outline-none"
                placeholder="Search on campus..."
                value={searchInput}
                onChange={handleInputChange}
            />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 mx-1"
                onClick={handleSearchSubmit}
            >
                Search
            </button>
            </div>

            </div>

        </div>
      </div>
    );
  };

export default BottomSearchBar;