import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white h-16 fixed top-0 right-0 left-64 shadow-sm z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-700">
          Welcome, Student
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FaBell className="text-gray-600 text-xl" />
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
            <FaUserCircle className="text-gray-600 text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;