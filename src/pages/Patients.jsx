import React, { useState, useEffect } from "react";
import { getPatients, deletePatientById } from "../utils/patientStorage";
import Card from "../components/Card";
import { NavLink, useNavigate } from "react-router-dom";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [careFilter, setCareFilter] = useState("All");

  const [deleteId, setDeleteId] = useState(null); // patient selected for deletion
  const navigate = useNavigate();

  // Load patients once
  useEffect(() => {
    setPatients(getPatients());
  }, []);

  // Extract unique care types for dropdown
  const careTypes = [...new Set(patients.map((p) => p.typeOfCare))];

  // Search + Filter Logic
  const filteredPatients = patients.filter((p) => {
    const matchesName = p.fullName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || p.status === statusFilter;
    const matchesCare = careFilter === "All" || p.typeOfCare === careFilter;

    return matchesName && matchesStatus && matchesCare;
  });

  // Delete confirmed
  function confirmDelete() {
    deletePatientById(deleteId);
    setPatients(getPatients());
    setDeleteId(null);
  }

  return (
    <div className="p-6 text-gray-800 dark:text-gray-200">

      <h1 className="text-2xl font-bold mb-4">Patients</h1>

      {/* SEARCH + FILTERS */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        {/* Search by Name */}
        <input
          placeholder="Search by name..."
          className="p-3 rounded border bg-white dark:bg-gray-700 dark:text-gray-100"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter by Status */}
        <select
          className="p-3 rounded border bg-white dark:bg-gray-700 dark:text-gray-100"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* Filter by Type of Care */}
        <select
          className="p-3 rounded border bg-white dark:bg-gray-700 dark:text-gray-100"
          onChange={(e) => setCareFilter(e.target.value)}
        >
          <option value="All">All Care Types</option>
          {careTypes.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* PATIENT LIST */}
      <div className="grid grid-cols-3 gap-6">
        {filteredPatients.map((p) => (
          <Card key={p.id} className="hover:shadow-lg">

            {/* CLICK → Patient Detail Page */}
            <NavLink to={`/patients/${p.id}`}>
              <h2 className="text-lg font-semibold">{p.fullName}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{p.typeOfCare}</p>
              <p className="text-sm mt-1">{p.status}</p>
            </NavLink>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-4">

              {/* Edit Patient */}
              <button
                onClick={() => navigate(`/edit-patient/${p.id}`)}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Edit
              </button>

              {/* Delete Patient */}
              <button
                onClick={() => setDeleteId(p.id)}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
              >
                Delete
              </button>
            </div>

          </Card>
        ))}
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <Card className="w-80 text-center">

            <h2 className="text-lg font-semibold">Delete Patient?</h2>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              This action cannot be undone.
            </p>

            <div className="flex gap-3 mt-4 justify-center">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
              >
                Yes, Delete
              </button>

              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-gray-100 rounded"
              >
                Cancel
              </button>
            </div>

          </Card>
        </div>
      )}

    </div>
  );
}
