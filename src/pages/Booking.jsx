import React, { useState } from "react";
import { services } from "../mock/data";
import { saveBooking } from "../utils/bookingStorage";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    serviceId: "",
    date: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    saveBooking({
      id: Date.now().toString(),
      ...form,
      serviceName: services.find((s) => s.id === form.serviceId)?.name,
      status: "Pending",
      createdAt: new Date().toISOString().split("T")[0],
    });

    alert("Booking created successfully!");

    // RESET FORM AFTER SUBMISSION
    setForm({
      name: "",
      age: "",
      phone: "",
      address: "",
      serviceId: "",
      date: "",
    });
  }

  return (
    <div className="max-w-lg space-y-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-bold">Book a Service</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>

        {/* NAME */}
        <input
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* AGE */}
        <input
          type="number"
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          placeholder="Age"
          required
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        {/* PHONE NUMBER */}
        <input
          type="number"
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {/* ADDRESS */}
        <input
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        {/* SERVICE DROPDOWN */}
        <select
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          required
          value={form.serviceId}
          onChange={(e) => setForm({ ...form, serviceId: e.target.value })}
        >
          <option value="">Select Service</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        {/* DATE */}
        <input
          type="date"
          className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-gray-100"
          required
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        {/* SUBMIT BUTTON */}
        <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Book Now
        </button>
      </form>
    </div>
  );
}
