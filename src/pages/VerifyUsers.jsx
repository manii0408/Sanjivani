// src/pages/VerifyUsers.jsx
import React from 'react';

export default function VerifyUsers() {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Verify Donor Accounts</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p className="font-semibold">User: Rohan Sharma</p>
        <p>Email: rohan@example.com</p>
        <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Verify</button>
      </div>
    </div>
  );
}