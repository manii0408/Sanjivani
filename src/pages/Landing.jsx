import React, { useState } from "react";

export default function Landing() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/*  Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-red-700 dark:text-red-400">
          Blood & Organ Donor Connect
        </h1>

        {/* Hero Section */}
        <section className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Save Lives. Be a Donor.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Join our community to help patients in need. Every drop of blood and every donated organ brings someone hope. Be part of the mission.
          </p>
        </section>

        {/*  Login / Signup Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowLogin(true)}
            className={`px-4 py-2 rounded-l ${
              showLogin
                ? "bg-red-600 text-white"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setShowLogin(false)}
            className={`px-4 py-2 rounded-r ${
              !showLogin
                ? "bg-blue-600 text-white"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            Signup
          </button>
        </div>

        {/*  Form Section */}
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded p-6 max-w-md mx-auto ">
          {showLogin ? (
            <form className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-center">Login</h3>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                Login
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-center">Signup</h3>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Signup
              </button>
            </form>
          )}
        </div>

        {/* 🔚 Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Blood & Organ Donor Connect. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
