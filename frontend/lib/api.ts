// lib/api.ts
export const BACKEND_URL = 'http://localhost:8080';

export async function fetchPatients() {
  const res = await fetch(`${BACKEND_URL}/patients`);
  if (!res.ok) throw new Error("Failed to fetch patients");
  return res.json();
}
export async function fetchMedications() {
  const res = await fetch(`${BACKEND_URL}/medications`);
  if (!res.ok) throw new Error("Failed to fetch medications");
  return res.json();
}   