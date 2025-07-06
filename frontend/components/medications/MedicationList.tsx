'use client';

import React, { useState } from "react";
import { useDeleteMedication, useUpdateMedication } from "@/hooks/useMedications";
import type { Medication } from "@/types";

export default function MedicationList({ medications }: { medications: Medication[] }) {
  const { mutateAsync: deleteMedication } = useDeleteMedication();
  const { mutateAsync: updateMedication } = useUpdateMedication();

  // Track the medication being edited and its temporary values
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFields, setEditFields] = useState<{ name: string; dosage: string; frequency: string }>({
    name: "",
    dosage: "",
    frequency: "",
  });

  const startEditing = (med: Medication) => {
    setEditingId(med.id);
    setEditFields({
      name: med.name,
      dosage: med.dosage,
      frequency: med.frequency,
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditFields({ name: "", dosage: "", frequency: "" });
  };

  const saveEdit = async () => {
    const { name, dosage, frequency } = editFields;

    if (!name.trim() || !dosage.trim() || !frequency.trim()) {
      alert("Please fill in all fields: Name, Dosage, and Frequency.");
      return;
    }

    if (editingId !== null) {
      try {
        await updateMedication({
          id: editingId,
          data: {
            name: name.trim(),
            dosage: dosage.trim(),
            frequency: frequency.trim(),
          },
        });
        cancelEditing();
      } catch (error) {
        console.error("Failed to update medication:", error);
      }
    }
  };

  return (
    <ul className="space-y-2">
      {medications.map((m) => (
        <li key={m.id} className="border p-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          {editingId === m.id ? (
            <>
              <input
                type="text"
                value={editFields.name}
                onChange={(e) => setEditFields({ ...editFields, name: e.target.value })}
                className="border px-2 py-1 rounded mb-1 md:mb-0 md:mr-2"
                placeholder="Medication Name"
              />
              <input
                type="text"
                value={editFields.dosage}
                onChange={(e) => setEditFields({ ...editFields, dosage: e.target.value })}
                className="border px-2 py-1 rounded mb-1 md:mb-0 md:mr-2"
                placeholder="Dosage"
              />
              <input
                type="text"
                value={editFields.frequency}
                onChange={(e) => setEditFields({ ...editFields, frequency: e.target.value })}
                className="border px-2 py-1 rounded mb-1 md:mb-0 md:mr-2"
                placeholder="Frequency"
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
              <span className="font-semibold">{m.name}</span>
              <span className="text-sm text-gray-600">
                Dosage: {m.dosage} | Frequency: {m.frequency}
              </span>
              <div className="space-x-4 mt-1 md:mt-0">
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
