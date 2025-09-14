// src/pages/DonationHistory.jsx
import React from 'react';

export default function DonationHistory() {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">My Donation History</h1>
      <table className="w-full border dark:border-gray-600">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2">Date</th>
            <th className="p-2">Type</th>
            <th className="p-2">Recipient</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t dark:border-gray-600">
            <td className="p-2">2025-06-20</td>
            <td className="p-2">Blood (O+)</td>
            <td className="p-2">AIIMS Delhi</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}