
// ✅ app/patients/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { getPatients } from '@/lib/api';
import PatientForm from '@/components/PatientForm';

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);

  const loadPatients = async () => {
    const data = await getPatients();
    setPatients(data);
  };

  useEffect(() => {
    loadPatients();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Patients</h1>
      <PatientForm onSuccess={loadPatients} />
      <ul className="space-y-2">
        {patients.map((p: any) => (
          <li key={p.id} className="border p-2 rounded shadow">
            {p.name} (Age: {p.age})
          </li>
        ))}
      </ul>
    </div>
  );
}