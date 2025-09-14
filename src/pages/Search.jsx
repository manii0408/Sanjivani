// src/pages/Search.jsx
import React from 'react';

export default function Search() {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Search Donors</h1>
      <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input type="text" placeholder="Blood Group" className="p-2 rounded border dark:bg-gray-700" />
        <input type="text" placeholder="Organ Needed" className="p-2 rounded border dark:bg-gray-700" />
        <input type="text" placeholder="City / Pincode" className="p-2 rounded border dark:bg-gray-700" />
        <button type="submit" className="col-span-1 sm:col-span-3 bg-red-600 text-white py-2 rounded hover:bg-red-700">Search</button>
      </form>
    </div>
  );
}