import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">My Portfolio</h1>
      <div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 bg-white text-black p-4 shadow-lg">
            <ul>
              <li><a href="../" className="block p-2">Home</a></li>
              <li><a href="../about" className="block p-2">About</a></li>
              <li><a href="../contact" className="block p-2">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
