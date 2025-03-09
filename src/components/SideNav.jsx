import React, { useState } from 'react';

const SideNav = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
    // You can implement your search functionality here
  };

  return (
    <nav className="fixed h-full bg-gray-800 text-white w-64 p-4">
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-full p-2 mb-2 bg-gray-700 text-white"
        />
        <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-700">
          Search
        </button>
      </form>
      <ul>
        <li className="p-4 hover:bg-gray-700"><a href="#section1">Section 1</a></li>
        <li className="p-4 hover:bg-gray-700"><a href="#section2">Section 2</a></li>
        <li className="p-4 hover:bg-gray-700"><a href="#section3">Section 3</a></li>
      </ul>
    </nav>
  );
};

export default SideNav;
