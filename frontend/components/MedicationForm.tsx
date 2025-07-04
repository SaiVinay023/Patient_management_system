// ✅ components/MedicationForm.tsx

'use client';

import { useState } from 'react';
import { createMedication } from '@/lib/api';

export default function MedicationForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    await createMedication({ name, description });
    setName('');
    setDescription('');
    onSuccess();
  };

  return (
    <div className="space-y-2">
      <input className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} placeholder="Medication Name" />
      <input className="border p-2 w-full" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Add Medication</button>
    </div>
  );
}