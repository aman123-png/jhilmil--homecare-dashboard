import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-blue-700">
            Jhilmil Homecare
          </div>
          <div className="text-xs text-gray-500">
            Compassionate care at home
          </div>
        </div>

        <div className="space-x-5 text-sm font-medium">
          {["/", "/patients", "/services", "/booking", "/bookings"].map(
            (path, i) => {
              const names = ["Dashboard", "Patients", "Services", "Book", "My Bookings"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  {names[i]}
                </NavLink>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
}
