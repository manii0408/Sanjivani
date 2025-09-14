// src/pages/FlaggedUsers.jsx
import React from 'react';

export default function FlaggedUsers() {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Flagged Users</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p className="font-semibold">Suspicious activity detected for: Ankit Verma</p>
        <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Review Report</button>
      </div>
    </div>
  );
}