const API_URL = 'http://localhost:8080';

// =================== PATIENTS ===================

export async function getPatients() {
  const res = await fetch(`${API_URL}/patients`);
  if (!res.ok) throw new Error('Failed to fetch patients');
  return res.json();
}

export async function getPatientById(id: string | number) {
  const res = await fetch(`${API_URL}/patients/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch patient with ID ${id}`);
  return res.json();
}

export async function createPatient(data: { name: string; dateOfBirth: string }) {
  const res = await fetch(`${API_URL}/patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create patient");
  return res.json();
}

export async function updatePatient(id: number | string, data: { name: string; dateOfBirth?: string }) {
  const res = await fetch(`${API_URL}/patients/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to update patient");
  }
  return res.json();
}

export async function deletePatient(id: string | number) {
  const res = await fetch(`${API_URL}/patients/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete patient with ID ${id}`);
}


// =================== MEDICATIONS ===================

export async function getMedications() {
  const res = await fetch(`${API_URL}/medications`);
  if (!res.ok) throw new Error('Failed to fetch medications');
  return res.json();
}

export async function getMedicationById(id: string | number) {
  const res = await fetch(`${API_URL}/medications/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch medication with ID ${id}`);
  return res.json();
}

export async function createMedication(data: { name: string }) {
  const res = await fetch(`${API_URL}/medications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create medication');
  return res.json();
}

export async function updateMedication(id: string | number, data: { name: string }) {
  const res = await fetch(`${API_URL}/medications/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Failed to update medication with ID ${id}`);
  return res.json();
}

export async function deleteMedication(id: string | number) {
  const res = await fetch(`${API_URL}/medications/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete medication with ID ${id}`);
}


// =================== ASSIGNMENTS ===================

export async function getAssignments() {
  const res = await fetch(`${API_URL}/assignments`);
  if (!res.ok) throw new Error('Failed to fetch assignments');
  return res.json();
}

export async function getAssignmentById(id: string | number) {
  const res = await fetch(`${API_URL}/assignments/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch assignment with ID ${id}`);
  return res.json();
}

export async function createAssignment(data: { patientId: number; medicationId: number }) {
  const res = await fetch(`${API_URL}/assignments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create assignment');
  return res.json();
}

export async function updateAssignment(id: string | number, data: { patientId: number; medicationId: number }) {
  const res = await fetch(`${API_URL}/assignments/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Failed to update assignment with ID ${id}`);
  return res.json();
}

export async function deleteAssignment(id: string | number) {
  const res = await fetch(`${API_URL}/assignments/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete assignment with ID ${id}`);
}


// =================== EXPORTS ===================

export {
  // Patients
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,

  // Medications
  getMedications,
  getMedicationById,
  createMedication,
  updateMedication,
  deleteMedication,

  // Assignments
  getAssignments,
  getAssignmentById,
  createAssignment,
  updateAssignment,
  deleteAssignment,
};
