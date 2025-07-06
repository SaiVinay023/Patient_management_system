'use client';

import { useState } from 'react';
import { useCreatePatient } from '@/hooks/usePatients';

export default function PatientForm() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const { mutateAsync: createPatient, isLoading } = useCreatePatient();

  const handleSubmit = async () => {
    if (!name.trim()) return;

    try {
      await createPatient({
        name: name.trim(),
        dateOfBirth: dateOfBirth || undefined, // Allow optional
      });

      setName('');
      setDateOfBirth('');
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-4 w-full max-w-md">
      <input
        className="border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Patient Name"
      />
      <input
        type="date"
        className="border p-2 rounded"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        placeholder="Date of Birth"
      />
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isLoading ? 'Adding...' : 'Add Patient'}
      </button>
    </div>
  );
}
