// src/pages/Dashboard.jsx
import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">My Dashboard</h1>
      <div className="grid gap-4">
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
          <p className="font-semibold">Donation Status: <span className="text-green-600">Available</span></p>
        </div>
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
          <p className="font-semibold">Past Donations: 3</p>
        </div>
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
          <p className="font-semibold">Upcoming Requests: 1</p>
        </div>
      </div>
    </div>
  );
}