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
  const [patientId, setPatientId] = useState('');
  const [medicationId, setMedicationId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [id, setId] = useState<number | null>(null);

  const createMutation = useCreateAssignment();
  const updateMutation = useUpdateAssignment();

  useEffect(() => {
    if (initialData) {
      setPatientId(initialData.patientId.toString());
      setMedicationId(initialData.medicationId.toString());
      setStartDate(initialData.startDate ?? '');
      setNumberOfDays(initialData.numberOfDays?.toString() ?? '');
      setId(initialData.id);
    }
  }, [initialData]);

  const resetForm = () => {
    setPatientId('');
    setMedicationId('');
    setStartDate('');
    setNumberOfDays('');
    setId(null);
    onSuccess();
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!patientId || !medicationId || !startDate || !numberOfDays) {
    alert('Please fill in all fields.');
    return;
  }

  const payload = {
    patientId: parseInt(patientId, 10),
    medicationId: parseInt(medicationId, 10),
    startDate,
    numberOfDays: parseInt(numberOfDays, 10),
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
        type="number"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="number"
        placeholder="Medication ID"
        value={medicationId}
        onChange={(e) => setMedicationId(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <input
        type="number"
        placeholder="Number of Days"
        value={numberOfDays}
        onChange={(e) => setNumberOfDays(e.target.value)}
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
