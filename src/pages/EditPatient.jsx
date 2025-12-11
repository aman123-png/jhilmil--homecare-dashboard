import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPatients, updatePatientById } from "../utils/patientStorage";

export default function EditPatient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    number: "",
    address: "",
    status: "Active",
    typeOfCare: "",
    careDuration: ""
  });

  useEffect(() => {
    const patients = getPatients();
    const p = patients.find((x) => x.id === id);

    if (!p) {
      alert("Patient not found!");
      navigate("/patients");
      return;
    }

    setForm(p);
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    updatePatientById(id, form);

    alert("Patient updated successfully!");
    navigate("/patients");
  }

  return (
    <div className="p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-4">Edit Patient</h1>

      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">

        <input
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          placeholder="Full Name"
          required
        />

        <input
          type="number"
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          placeholder="Age"
          required
        />

        <select
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        >
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          value={form.number}
          onChange={(e) => setForm({ ...form, number: e.target.value })}
          placeholder="Phone Number"
        />

        <textarea
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Address"
        />

        <select
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <input
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          value={form.typeOfCare}
          onChange={(e) => setForm({ ...form, typeOfCare: e.target.value })}
          placeholder="Type of Care"
        />

        <input
          type="number"
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          value={form.careDuration}
          onChange={(e) => setForm({ ...form, careDuration: e.target.value })}
          placeholder="Care Duration (days)"
        />

        <button
          className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
