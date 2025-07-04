// ✅ components/AssignmentForm.tsx

'use client';

import { useEffect, useState } from 'react';
import { getPatients, getMedications, createAssignment } from '@/lib/api';

export default function AssignmentForm({ onSuccess }: { onSuccess: () => void }) {
  const [patients, setPatients] = useState([]);
  const [medications, setMedications] = useState([]);
  const [form, setForm] = useState({ patientId: '', medicationId: '', startDate: '', numberOfDays: 1 });

  useEffect(() => {
    getPatients().then(setPatients);
    getMedications().then(setMedications);
  }, []);

  const handleSubmit = async () => {
    await createAssignment({
      patientId: parseInt(form.patientId),
      medicationId: parseInt(form.medicationId),
      startDate: form.startDate,
      numberOfDays: Number(form.numberOfDays),
    });
    onSuccess();
  };

  return (
    <div className="space-y-2">
      <select className="border p-2 w-full" value={form.patientId} onChange={(e) => setForm({ ...form, patientId: e.target.value })}>
        <option value="">Select Patient</option>
        {patients.map((p: any) => <option key={p.id} value={p.id}>{p.name}</option>)}
      </select>

      <select className="border p-2 w-full" value={form.medicationId} onChange={(e) => setForm({ ...form, medicationId: e.target.value })}>
        <option value="">Select Medication</option>
        {medications.map((m: any) => <option key={m.id} value={m.id}>{m.name}</option>)}
      </select>

      <input type="date" className="border p-2 w-full" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
      <input type="number" className="border p-2 w-full" value={form.numberOfDays} onChange={(e) => setForm({ ...form, numberOfDays: Number(e.target.value) })} placeholder="Days" />

      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Assign</button>
    </div>
  );
}