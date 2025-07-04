// ✅ app/medications/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { getMedications } from '@/lib/api';
import MedicationForm from '@/components/MedicationForm';

export default function MedicationsPage() {
  const [medications, setMedications] = useState([]);

  const loadMedications = async () => {
    const data = await getMedications();
    setMedications(data);
  };

  useEffect(() => {
    loadMedications();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Medications</h1>
      <MedicationForm onSuccess={loadMedications} />
      <ul className="space-y-2">
        {medications.map((m: any) => (
          <li key={m.id} className="border p-2 rounded shadow">
            {m.name}: {m.description}
          </li>
        ))}
      </ul>
    </div>
  );
}