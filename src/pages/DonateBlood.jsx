import React from "react";

export default function DonateBlood() {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-md mx-auto bg-white/10 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-red-600 text-center">Register as Blood Donor</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" />
          <input type="email" placeholder="Email Address" className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" />
          <input type="blood-type" placeholder="Blood-Type" className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" />
          <input type="text" placeholder="City" className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white" />
          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Submit</button>
        </form>
      </div>
    </div>
  );
}