import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/Landing";
import Login from "./components/Login";
import DashboardLayout from "./components/DashboardLayout";
import Transaction from "./components/Transaction";
import Dashboard from "./components/Dashboard";
import Donation from "./components/Donation";
import Register from "./components/Register";
import { Outlet } from "react-router-dom";

// Mock Authentication Check
const isAuthenticated = () => !!localStorage.getItem("token");

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <Router> {/* ✅ Change HashRouter to BrowserRouter */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} /> {/* ✅ Default route */}
          <Route path="transactions" element={<Transaction />} />
          <Route path="donation" element={<Donation />} />
        </Route>
      </Routes>
    </Router>
  );
}
