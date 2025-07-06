export interface Patient {
  id: number;
  name: string;
  dateOfBirth: string;
  assignments: Assignment[];
}

export interface Medication {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
}

export interface Assignment {
  id: number;
  patientId: number;
  medicationId: number;
  startDate?: string;
  numberOfDays?: number;
  remainingDays?: number;  // <-- add this optional prop
  medication?: { name: string };  // if you use this nested object
  patient?: { name: string };
}
