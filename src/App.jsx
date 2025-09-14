// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Landing from './pages/Landing';
import DonateBlood from './pages/DonateBlood';
import DonateOrgan from './pages/DonateOrgan';
import Requests from './pages/Requests';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import Search from './pages/Search';
import Notifications from './pages/Notifications';
import DonationHistory from './pages/DonationHistory';
import VerifyUsers from './pages/VerifyUsers';
import FlaggedUsers from './pages/FlaggedUsers';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
      
        

        {/* Authenticated routes */}
        <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/donate-blood" element={<DonateBlood />} />
          <Route path="/donate-organ" element={<DonateOrgan />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/donation-history" element={<DonationHistory />} />
          <Route path="/verify-users" element={<VerifyUsers />} />
          <Route path="/flagged-users" element={<FlaggedUsers />} />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}