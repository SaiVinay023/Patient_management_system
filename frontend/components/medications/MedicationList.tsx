"use client";

import React, { useState } from "react";
import { useDeleteMedication, useUpdateMedication } from "@/hooks/useMedications";
import type { Medication } from "@/types";

export default function MedicationList({ medications }: { medications: Medication[] }) {
  const { mutateAsync: deleteMedication } = useDeleteMedication();
  const { mutateAsync: updateMedication } = useUpdateMedication();

  // Track the medication id being edited and its temp name
  const [editingId, setEditingId] = useState<number | string | null>(null);
  const [editName, setEditName] = useState("");

  const startEditing = (med: Medication) => {
    setEditingId(med.id);
    setEditName(med.name);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName("");
  };

  const saveEdit = async () => {
    if (editingId !== null && editName.trim() !== "") {
      try {
        await updateMedication({ id: editingId, data: { name: editName.trim() } });
        cancelEditing();
      } catch (error) {
        console.error("Failed to update medication:", error);
      }
    }
  };

  return (
    <ul className="space-y-2">
      {medications.map((m) => (
        <li key={m.id} className="border p-2 flex justify-between items-center">
          {editingId === m.id ? (
            <>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border px-2 py-1 rounded"
              />
              <div className="space-x-2">
                <button
                  onClick={saveEdit}
                  className="text-green-600 hover:underline"
                >
                  Save
                </button>
                <button
                  onClick={cancelEditing}
                  className="text-gray-600 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <span>{m.name}</span>
              <div className="space-x-4">
                <button
                  onClick={() => startEditing(m)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMedication(m.id)}
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
