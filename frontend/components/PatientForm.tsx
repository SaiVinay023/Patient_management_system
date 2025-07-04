// ✅ components/PatientForm.tsx

'use client';

import { useState } from 'react';
import { createPatient } from '@/lib/api';

export default function PatientForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(0);

  const handleSubmit = async () => {
    await createPatient({ name, age });
    setName('');
    setAge(0);
    onSuccess();
  };

  return (
    <div className="space-y-2">
      <input className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input className="border p-2 w-full" type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Age" />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Add Patient</button>
    </div>
  );
}