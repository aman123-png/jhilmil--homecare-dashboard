import React from "react";

export default function PatientCard({ p, onClick }) {
  return (
    <div
      onClick={() => onClick(p)}
      className="p-3 border rounded-lg cursor-pointer hover:shadow"
    >
      <div className="flex justify-between">
        <div>
          <div className="font-medium">{p.fullName}</div>
          <div className="text-sm text-gray-500">
            {p.typeOfCare} • Age {p.age}
          </div>
        </div>
        <div
          className={`text-sm ${
            p.status === "Active" ? "text-green-600" : "text-gray-400"
          }`}
        >
          {p.status}
        </div>
      </div>
      <div className="mt-1 text-xs text-gray-500">
        Next Visit: {p.nextVisit}
      </div>
    </div>
  );
}
