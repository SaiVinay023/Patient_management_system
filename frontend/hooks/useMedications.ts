import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../lib/api';
import type { Medication } from '../types';

// Fetch all medications
export function useMedications() {
  return useQuery<Medication[], Error>({
    queryKey: ['medications'],
    queryFn: api.getMedications,
  });
}

// Fetch one medication by ID
export function useMedication(id: number | string) {
  return useQuery<Medication, Error>({
    queryKey: ['medications', id],
    queryFn: () => api.getMedicationById(id),
  });
}

// Create medication
export function useCreateMedication() {
  const queryClient = useQueryClient();

  return useMutation(api.createMedication, {
    onSuccess: () => {
      queryClient.invalidateQueries(['medications']);
    },
  });
}
/*export function useCreateMedication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.createMedication,
    onSuccess: () => {
      queryClient.invalidateQueries(['medications']);
    },
  });
} */

// Update medication
export function useUpdateMedication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number | string; data: { name: string } }) =>
      api.updateMedication(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['medications']);
    },
  });
}

// Delete medication
export function useDeleteMedication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number | string) => api.deleteMedication(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['medications']);
    },
  });
}
