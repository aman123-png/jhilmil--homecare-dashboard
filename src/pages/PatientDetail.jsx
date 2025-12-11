import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPatients, deletePatientById } from "../utils/patientStorage";
import Card from "../components/Card";

export default function PatientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patient, setPatient] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    const all = getPatients();
    setPatient(all.find((p) => p.id === id));
  }, [id]);

  if (!patient) return <div className="p-6">Loading...</div>;

  function handleDelete() {
    deletePatientById(id);
    navigate("/patients");
  }

  return (
    <div className="p-6 text-gray-800 dark:text-gray-200">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Patient Details</h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/edit-patient/${id}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Edit
          </button>

          <button
            onClick={() => setDeleteModal(true)}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>

      <Card className="mt-6">

        <h2 className="text-xl font-semibold">{patient.fullName}</h2>

        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Phone:</strong> {patient.number}</p>
        <p><strong>Address:</strong> {patient.address}</p>

        <hr className="my-4 border-gray-300 dark:border-gray-600" />

        <p><strong>Status:</strong> {patient.status}</p>
        <p><strong>Type of Care:</strong> {patient.typeOfCare}</p>
        <p><strong>Duration:</strong> {patient.careDuration} Days</p>

        <hr className="my-4 border-gray-300 dark:border-gray-600" />

        <p><strong>Assigned Caregiver:</strong> Sarah Johnson</p>
        <p><strong>Remarks:</strong> Patient recovering well, needs daily monitoring.</p>
      </Card>

      {/* DELETE CONFIRMATION MODAL */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <Card className="w-80 text-center">

            <h2 className="text-lg font-semibold">Delete Patient?</h2>
            <p className="text-sm mt-2">This action cannot be undone.</p>

            <div className="flex gap-3 mt-4 justify-center">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Yes, Delete
              </button>

              <button
                onClick={() => setDeleteModal(false)}
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
