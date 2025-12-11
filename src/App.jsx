import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientDetail from "./pages/PatientDetail";
import NewPatient from "./pages/NewPatient";
import EditPatient from "./pages/EditPatient";

import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

import Booking from "./pages/Booking";
import Bookings from "./pages/Bookings";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar (collapsible) */}
      <Sidebar />

      {/* Main content */}
      <main className="ml-16 md:ml-56 flex-1 p-6">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Dashboard />} />

          {/* Patients */}
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:id" element={<PatientDetail />} />
          <Route path="/new-patient" element={<NewPatient />} />
          <Route path="/edit-patient/:id" element={<EditPatient />} />
          

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />

          {/* Booking */}
          <Route path="/booking" element={<Booking />} />
          <Route path="/bookings" element={<Bookings />} />

          {/* Fallback - redirect unknown routes to dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
