import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../lib/api';
import type { Patient } from '../types';

// Fetch all patients
export function usePatients() {
  return useQuery<Patient[], Error>({
    queryKey: ['patients'],
    queryFn: api.getPatients,
  });
}

// Fetch one patient by ID
export function usePatient(id: number | string) {
  return useQuery<Patient, Error>({
    queryKey: ['patients', id],
    queryFn: () => api.getPatientById(id),
  });
}


// Create patient
export function useCreatePatient() {
  const queryClient = useQueryClient();

  return useMutation(api.createPatient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['patients']);
    },
  });
}


// Update patient
export function useUpdatePatient() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, data }: { id: number | string; data: { name: string; dateOfBirth?: string } }) =>
      api.updatePatient(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['patients']);
      },
    }
  );
}

// Delete patient
export function useDeletePatient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number | string) => api.deletePatient(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['patients']);
    },
  });
}
