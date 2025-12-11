import React from "react";
import { services } from "../mock/data";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Our Services</h2>

      <div className="grid grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="p-5 border rounded-2xl shadow hover:shadow-lg transition bg-gradient-to-br from-gray-50 to-white"
          >
            <div className="flex items-center gap-2 mb-2">
              <SparklesIcon className="h-6 w-6 text-purple-600" />
              <h3 className="font-semibold">{s.name}</h3>
            </div>

            <p className="text-sm text-gray-600">{s.description}</p>

            <div className="mt-3 text-sm">
              <p>
                <strong>Duration:</strong> {s.duration}
              </p>
              <p className="text-blue-600">
                <strong>{s.costRange}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
