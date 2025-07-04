const API_URL = 'http://localhost:8080';

// Patients
export async function getPatients() {
  const res = await fetch(`${API_URL}/patients`);
  if (!res.ok) throw new Error('Failed to fetch patients');
  return res.json();
}

export async function createPatient(data: { name: string }) {
  const res = await fetch(`${API_URL}/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Medications
export async function getMedications() {
  const res = await fetch(`${API_URL}/medications`);
  if (!res.ok) throw new Error('Failed to fetch medications');
  return res.json();
}

export async function createMedication(data: { name: string }) {
  const res = await fetch(`${API_URL}/medications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Assignments
export async function getAssignments() {
  const res = await fetch(`${API_URL}/assignments`);
  if (!res.ok) throw new Error('Failed to fetch assignments');
  return res.json();
}

export async function createAssignment(data: { patientId: number; medicationId: number }) {
  const res = await fetch(`${API_URL}/assignments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}


// Add other CRUD APIs if needed
export {
  createPatient,
  createMedication,
  createAssignment,
  // ...other functions
};