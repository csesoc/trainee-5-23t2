import './index.scss';
import React, { useEffect, useState } from 'react';

const BottomSearchBar = () => {
    // Add state to manage search input
    const [searchInput, setSearchInput] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Function to handle search input changes
    const handleInputChange = (e) => {
      setSearchInput(e.target.value);
      setIsMenuOpen(!!e.target.value);
    };
  
    // Function to handle search submission
    const handleSearchSubmit = () => {
      // Implement your search functionality here
      console.log('Searching for:', searchInput);
    };
  
    return (
      <div className={`fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex items-center justify-between bg-gray-400 transition-all ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800">
          <div className="max-w-screen-lg mx-auto m-4">
          <div className="flex items-center justify-between">

              <div className="flex w-full">
              <input
                  type="text"
                  className="w-full bg-gray-900 text-white rounded-md py-2 px-3 outline-none mr-2"
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
            
          <div
            className={`bg-gray-800 p-4 flex items-center justify-between bg-gray-400 h-100 ${
              isMenuOpen ? 'block' : 'hidden' // Use block to show, hidden to hide
            }`}
          >
            <div className='text-white'>hmu</div>
          </div>

        </div>
      </div>
    );
  };

export default BottomSearchBar;