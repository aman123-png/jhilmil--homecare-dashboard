import React, { useEffect, useState } from "react";
import { getPatients } from "../utils/patientStorage";
import { getBookings } from "../utils/bookingStorage";
import { services } from "../mock/data";

import {
  UserGroupIcon,
  ClipboardDocumentListIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";
import Card from "../components/Card";

export default function Dashboard() {
  const [patients, setPatients] = useState(null);
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    setPatients(getPatients());
    setBookings(getBookings());
  }, []);

  if (!patients || !bookings) {
    return <div className="p-6 text-gray-800 dark:text-gray-200">Loading...</div>;
  }

  const totalPatients = patients.length;
  const activePatients = patients.filter((p) => p.status === "Active").length;
  const totalServices = services.length;

  const today = new Date().toISOString().split("T")[0];
  const dailyActivity = bookings.filter((b) => b.createdAt === today).length;

  const recentPatients = [...patients].reverse().slice(0, 3);
  const recentBookings = [...bookings].reverse().slice(0, 3);

  const quickLinks = [
    { label: "View Patients", path: "/patients" },
    { label: "Manage Bookings", path: "/bookings" },
    { label: "Create Booking", path: "/booking" },
  ];

  return (
    <div className="p-6 text-gray-800 dark:text-gray-200">

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Welcome to Jhilmil Homecare 👋
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Track patients, manage bookings, and monitor services in one dashboard.
      </p>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        
        <Card className="bg-blue-600 text-white">
          <div className="flex gap-3">
            <UserGroupIcon className="h-10 w-10" />
            <div>
              <h2 className="text-lg font-semibold">Total Patients</h2>
              <p className="text-3xl font-bold">{totalPatients}</p>
              <p className="text-sm">{activePatients} Active</p>
            </div>
          </div>
        </Card>

        <Card className="bg-purple-600 text-white">
          <div className="flex gap-3">
            <SparklesIcon className="h-10 w-10" />
            <div>
              <h2 className="text-lg font-semibold">Total Services</h2>
              <p className="text-3xl font-bold">{totalServices}</p>
              <p className="text-sm">Premium Quality</p>
            </div>
          </div>
        </Card>

        <Card className="bg-green-600 text-white">
          <div className="flex gap-3">
            <ClipboardDocumentListIcon className="h-10 w-10" />
            <div>
              <h2 className="text-lg font-semibold">Daily Activity</h2>
              <p className="text-3xl font-bold">{dailyActivity}</p>
              <p className="text-sm">Bookings Created Today</p>
            </div>
          </div>
        </Card>
      </div>

      {/* RECENT ACTIVITY */}
      <h2 className="text-xl font-semibold mt-8 text-gray-900 dark:text-gray-100">
        Recent Activity
      </h2>

      <div className="grid grid-cols-3 gap-6 mt-4">

        {/* Recent Patients */}
        <Card>
          <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Recent Patients</h3>

          {recentPatients.map((p) => (
            <div key={p.id} className="text-sm py-1 border-b border-gray-200 dark:border-gray-700">
              {p.fullName} — {p.typeOfCare}
            </div>
          ))}
        </Card>

        {/* Recent Bookings */}
        <Card>
          <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Recent Bookings</h3>

          {recentBookings.map((b) => (
            <div key={b.id} className="text-sm py-1 border-b border-gray-200 dark:border-gray-700">
              {b.name} booked <strong>{b.serviceName}</strong> for {b.date}
            </div>
          ))}
        </Card>

        {/* Quick Links */}
        <Card>
          <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Card>

      </div>
    </div>
  );
}
