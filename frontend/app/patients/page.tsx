import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../../lib/api';

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients()
      .then(data => setPatients(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Patients</h1>
      <ul>
        {patients.map((patient: any) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
}
