// ✅ app/assignments/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { getAssignments } from '@/lib/api';
import AssignmentForm from '@/components/AssignmentForm';

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState([]);

  const loadAssignments = async () => {
    const data = await getAssignments();
    setAssignments(data);
  };

  useEffect(() => {
    loadAssignments();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Assignments</h1>
      <AssignmentForm onSuccess={loadAssignments} />
      <ul className="space-y-2">
        {assignments.map((a: any) => (
          <li key={a.id} className="border p-2 rounded shadow">
            Patient ID: {a.patientId} | Medication ID: {a.medicationId} | Start: {a.startDate} | Days: {a.numberOfDays}
          </li>
        ))}
      </ul>
    </div>
  );
}