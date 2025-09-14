// src/pages/Notifications.jsx
import React from 'react';

export default function Notifications() {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul className="space-y-3">
        <li className="bg-white dark:bg-gray-800 p-3 rounded shadow">Urgent: Blood request for B+ in Delhi</li>
        <li className="bg-white dark:bg-gray-800 p-3 rounded shadow">Organ donation matched with recipient in Mumbai</li>
      </ul>
    </div>
  );
}