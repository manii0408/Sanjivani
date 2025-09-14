import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { path: '/landing', name: 'Home' },
  { path: '/donate-blood', name: 'Donate Blood' },
  { path: '/donate-organ', name: 'Donate Organ' },
  { path: '/requests', name: 'Requests' },
  { path: '/search', name: 'Search Donors' },
  { path: '/dashboard', name: 'Dashboard' },
  { path: '/notifications', name: 'Notifications' },
  { path: '/history', name: 'Donation History' },
  { path: '/volunteer', name: 'Volunteer' },
  { path: '/contact', name: 'Contact Us' },
];

const DonationSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 z-50 bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <button
          onClick={onClose}
          className="mb-4 float-right text-xl text-gray-600 dark:text-gray-300"
        >
          ✖
        </button>
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DonationSidebar;