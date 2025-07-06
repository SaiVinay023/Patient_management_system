'use client';

import { useEffect, useState } from 'react';
import { Assignment } from '@/types';
import { useCreateAssignment, useUpdateAssignment } from '@/hooks/useAssignments';

export default function AssignmentForm({
  onSuccess,
  initialData,
}: {
  onSuccess: () => void;
  initialData?: Assignment;
}) {
  const [name, setName] = useState('');
  const [patientId, setPatientId] = useState('');
  const [medicationId, setMedicationId] = useState('');
  const [id, setId] = useState<number | null>(null);

  const createMutation = useCreateAssignment();
  const updateMutation = useUpdateAssignment();

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPatientId(initialData.patientId.toString());
      setMedicationId(initialData.medicationId.toString());
      setId(initialData.id);
    }
  }, [initialData]);

  const resetForm = () => {
    setName('');
    setPatientId('');
    setMedicationId('');
    setId(null);
    onSuccess();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name,
      patientId: parseInt(patientId),
      medicationId: parseInt(medicationId),
    };

    if (id) {
      updateMutation.mutate({ id, data: payload }, { onSuccess: resetForm });
    } else {
      createMutation.mutate(payload, { onSuccess: resetForm });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        type="text"
        placeholder="Assignment name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <input
        type="number"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <input
        type="number"
        placeholder="Medication ID"
        value={medicationId}
        onChange={(e) => setMedicationId(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {id ? 'Update Assignment' : 'Create Assignment'}
      </button>
    </form>
  );
}
