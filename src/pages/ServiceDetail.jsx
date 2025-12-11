import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../mock/data";

export default function ServiceDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const s = services.find(x => x.id === id);
  if (!s) return <div>Service not found</div>;

  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">{s.name}</h1>
      <p className="text-sm text-gray-600">{s.description}</p>
      <p><strong>Duration:</strong> {s.duration}</p>
      <p><strong>Cost:</strong> {s.costRange}</p>

      <div className="flex gap-3">
        <button
          onClick={() => nav("/booking", { state: { preselectedServiceId: s.id } })}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Book This Service
        </button>

        <button onClick={() => nav(-1)} className="px-4 py-2 border rounded">
          Back
        </button>
      </div>
    </div>
  );
}
