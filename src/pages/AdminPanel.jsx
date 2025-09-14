// src/pages/AdminPanel.jsx
import React from 'react';

export default function AdminPanel() {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li>Verify new donor registrations</li>
        <li>View flagged/suspect users</li>
        <li>Generate donation statistics</li>
        <li>Respond to urgent requests</li>
      </ul>
    </div>
  );
}