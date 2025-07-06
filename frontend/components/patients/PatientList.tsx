'use client';

import { useState } from "react";
import { useDeletePatient, useUpdatePatient } from "@/hooks/usePatients";
import type { Patient } from "@/types";

export default function PatientList({ patients }: { patients: Patient[] }) {
  const { mutate: deletePatient } = useDeletePatient();
  const { mutate: updatePatient } = useUpdatePatient();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editDOB, setEditDOB] = useState('');

  const handleEdit = (p: Patient) => {
    setEditingId(p.id);
    setEditName(p.name);
    setEditDOB(p.dateOfBirth ?? '');
  };

 const handleSave = () => {
  if (!editName.trim() || editingId === null) return;

  updatePatient({
    id: editingId,
    data: {
      name: editName.trim(),
      dateOfBirth: editDOB || undefined,
    },
  });

  // Reset the form optimistically (you can wait for `onSuccess` if needed)
  setEditingId(null);
  setEditName('');
  setEditDOB('');
};


  return (
    <ul className="space-y-2">
      {patients.map((p) => (
        <li
          key={p.id}
          className="border p-2 flex flex-col md:flex-row md:justify-between md:items-center gap-2"
        >
          {editingId === p.id ? (
            <div className="flex flex-col md:flex-row gap-2 w-full md:items-center">
              <input
                className="border p-1 rounded"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="date"
                className="border p-1 rounded"
                value={editDOB}
                onChange={(e) => setEditDOB(e.target.value)}
              />
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div>
                <p className="font-medium">{p.name}</p>
                {p.dateOfBirth && (
                  <p className="text-sm text-gray-500">
                    DOB: {new Date(p.dateOfBirth).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(p)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePatient(p.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
