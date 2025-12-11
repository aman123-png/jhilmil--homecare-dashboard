import React, { useState } from "react";
import { savePatient } from "../utils/patientStorage";

export default function NewPatient() {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    typeOfCare: "",
    duration: "",
    status: "Active",
  });

  function handleSubmit(e) {
    e.preventDefault();

    savePatient({
      id: Date.now().toString(),
      ...form,
      createdAt: new Date().toISOString(),
    });

    alert("Patient added successfully!");

    setForm({
      fullName: "",
      age: "",
      gender: "",
      address: "",
      phone: "",
      typeOfCare: "",
      duration: "",
      status: "Active",
    });
  }

  return (
    <div className="max-w-lg space-y-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-bold">Add Patient</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        
        {/* Full Name */}
        <input
          className="w-full p-3 border rounded"
          placeholder="Full Name"
          required
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />

        {/* Age */}
        <input
          type="number"
          className="w-full p-3 border rounded"
          placeholder="Age"
          required
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        {/* PHONE NUMBER (NEW) */}
        <input
          type="number"
          className="w-full p-3 border rounded"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {/* Gender */}
        <select
          className="w-full p-3 border rounded"
          required
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        {/* Address */}
        <input
          className="w-full p-3 border rounded"
          placeholder="Address"
          required
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        {/* Type of Care */}
        <input
          className="w-full p-3 border rounded"
          placeholder="Type of Care (Elder Care, Nursing Visit...)"
          required
          value={form.typeOfCare}
          onChange={(e) => setForm({ ...form, typeOfCare: e.target.value })}
        />

        {/* Duration */}
        <input
          className="w-full p-3 border rounded"
          placeholder="Duration (e.g., Weekly, Monthly)"
          required
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
        />

        {/* Status */}
        <select
          className="w-full p-3 border rounded"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        {/* Submit */}
        <button className="w-full p-3 bg-blue-600 text-white rounded">
          Add Patient
        </button>

      </form>
    </div>
  );
}
