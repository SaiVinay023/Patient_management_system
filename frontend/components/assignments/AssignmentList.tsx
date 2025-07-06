'use client';
import { Assignment } from '@/types';

export default function AssignmentList({
  assignments,
  onDelete,
  onEdit
}: {
  assignments: Assignment[];
  onDelete: (id: number) => void;
  onEdit: (a: Assignment) => void;
}) {
  return (
    <div className="space-y-4">
      {assignments.map((a) => (
        <div key={a.id} className="border p-4 rounded shadow-sm flex justify-between items-center">
          <div>
            <p className="font-semibold">{a.name}</p>
            <p className="text-sm text-gray-600">Medication ID: {a.medicationId}, Patient ID: {a.patientId}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(a)}
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
        </div>
      ))}
    </div>
  );
}
