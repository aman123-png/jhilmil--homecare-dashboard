import React, { useEffect, useState } from "react";
import { getBookings, deleteBookingById } from "../utils/bookingStorage";
import Card from "../components/Card";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  function confirmDelete() {
    deleteBookingById(deleteId);
    setBookings(getBookings());
    setDeleteId(null);
  }

  return (
    <div className="p-6 text-gray-800 dark:text-gray-200">

      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {/* No bookings message */}
      {bookings.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">
          No bookings found.
        </p>
      )}

      {/* Booking list */}
      <div className="grid grid-cols-2 gap-6">
        {bookings.map((b) => (
          <Card key={b.id} className="hover:shadow-lg">

            <h2 className="text-lg font-semibold">{b.serviceName}</h2>

            <p className="text-sm mt-1"><strong>Name:</strong> {b.name}</p>
            <p className="text-sm"><strong>Age:</strong> {b.age}</p>
            <p className="text-sm"><strong>Phone:</strong> {b.phone}</p>
            <p className="text-sm"><strong>Address:</strong> {b.address || "N/A"}</p>
            <p className="text-sm"><strong>Date:</strong> {b.date}</p>

            <p className="text-sm">
              <strong>Status:</strong>{" "}
              <span className="text-blue-600 dark:text-blue-400">{b.status}</span>
            </p>

            {/* DELETE BUTTON */}
            <button
              onClick={() => setDeleteId(b.id)}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              Delete
            </button>

          </Card>
        ))}
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <Card className="w-80 text-center p-6">

            <h2 className="text-lg font-semibold">Delete Booking?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              This action cannot be undone.
            </p>

            <div className="flex gap-3 mt-5 justify-center">
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
