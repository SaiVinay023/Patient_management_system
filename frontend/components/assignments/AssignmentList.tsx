'use client';

import React, { useState } from 'react';
import { Assignment } from '@/types';

export default function AssignmentList({
  assignments,
  onDelete,
  onEdit,
}: {
  assignments: Assignment[];
  onDelete: (id: number) => void;
  onEdit: (a: Assignment) => void;
}) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<Assignment>>({});

  const startEdit = (a: Assignment) => {
    setEditingId(a.id);
    setForm({ ...a });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({});
  };

  const handleChange = (field: keyof Assignment, value: any) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveEdit = () => {
    if (editingId !== null) {
      onEdit({ ...(form as Assignment), id: editingId });
      cancelEdit();
    }
  };

  return (
    <div className="space-y-4">
      {assignments.map((a) => (
        <div key={a.id} className="border p-4 rounded shadow-sm flex justify-between items-center">
          {editingId === a.id ? (
            <div className="flex-1 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  value={form.medicationId || ''}
                  onChange={(e) => handleChange('medicationId', Number(e.target.value))}
                  placeholder="Medication ID"
                  className="border px-2 py-1 rounded w-full"
                />
                <input
                  type="number"
                  value={form.patientId || ''}
                  onChange={(e) => handleChange('patientId', Number(e.target.value))}
                  placeholder="Patient ID"
                  className="border px-2 py-1 rounded w-full"
                />
                <input
                  type="date"
                  value={form.startDate || ''}
                  onChange={(e) => handleChange('startDate', e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                />
                <input
                  type="number"
                  value={form.numberOfDays || ''}
                  onChange={(e) => handleChange('numberOfDays', Number(e.target.value))}
                  placeholder="Number of Days"
                  className="border px-2 py-1 rounded w-full"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={saveEdit}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1">
                <p className="font-semibold">Assignment #{a.id}</p>
                <p className="text-sm text-gray-600">
                Medication: {a.medication?.name || a.medicationId}, Patient: {a.patient?.name || a.patientId}
                </p>
                <p className="text-sm text-gray-600">
                  Start Date: {a.startDate || 'N/A'}, Days: {a.numberOfDays ?? 'N/A'}, Remaining: {a.remainingDays ?? 'N/A'}
                </p>
                <p className="text-sm text-blue-700 font-semibold">
                🕒 Remaining Days: {a.remainingDays ?? 'N/A'}
                </p>

              </div>
              <div className="space-x-2">
                <button
                  onClick={() => startEdit(a)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(a.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
