import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/Landing";
import Login from './components/Login';
import DashboardLayout from './components/DashboardLayout';
import Transaction from './components/Transaction';
import Dashboard from "./components/Dashboard";
import Donation from './components/Donation'
import Register from './components/Register'

// Mock Authentication Check
const isAuthenticated = () => !!localStorage.getItem("token");

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>

      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Default Dashboard Route (Fixes the issue) */}
        <Route index element={<Dashboard />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="donation" element={<Donation/>}/>
      </Route>
    </Routes>
  );
}
