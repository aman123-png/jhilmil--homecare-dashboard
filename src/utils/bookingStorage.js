const BOOKING_KEY = "jhilmil_bookings";

/* ---------------------------
   Get All Bookings
---------------------------- */
export function getBookings() {
  return JSON.parse(localStorage.getItem(BOOKING_KEY) || "[]");
}

/* ---------------------------
   Save New Booking
---------------------------- */
export function saveBooking(booking) {
  const all = getBookings();
  all.push(booking);
  localStorage.setItem(BOOKING_KEY, JSON.stringify(all));
}

/* ---------------------------
   Update Entire Booking List
---------------------------- */
export function updateBookings(list) {
  localStorage.setItem(BOOKING_KEY, JSON.stringify(list));
}

/* ---------------------------
   Delete Booking by ID
---------------------------- */
export function deleteBookingById(id) {
  const all = getBookings();
  const filtered = all.filter((b) => b.id !== id);
  updateBookings(filtered);
  return filtered;
}

/* ---------------------------
   Optional: Edit Booking
---------------------------- */
export function updateBookingById(id, newData) {
  const all = getBookings();
  const updated = all.map((b) =>
    b.id === id ? { ...b, ...newData } : b
  );
  updateBookings(updated);
  return updated;
}
