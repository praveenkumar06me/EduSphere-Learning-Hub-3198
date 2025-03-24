import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaChalkboardTeacher, FaTasks, FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/courses', icon: <FaBook />, label: 'Courses' },
    { path: '/classroom', icon: <FaChalkboardTeacher />, label: 'Classroom' },
    { path: '/assignments', icon: <FaTasks />, label: 'Assignments' },
    { path: '/progress', icon: <FaChartLine />, label: 'Progress' },
  ];

  return (
    <aside className="bg-white h-screen w-64 fixed left-0 top-0 shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary-600">EduPlatform</h1>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors ${
                isActive ? 'bg-primary-50 text-primary-600 border-r-4 border-primary-600' : ''
              }`
            }
          >
            <span className="text-xl mr-4">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;