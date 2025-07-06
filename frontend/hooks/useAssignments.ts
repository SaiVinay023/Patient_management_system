import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../lib/api';
import type { Assignment } from '../types';

// Fetch all assignments
export function useAssignments() {
  return useQuery<Assignment[], Error>({
    queryKey: ['assignments'],
    queryFn: api.getAssignments,
    onSuccess: (data) => {
      console.log('Assignments data:', data);  // Check if remainingDays exists
    },
  });
}


// Fetch one assignment by ID
export function useAssignment(id: number | string) {
  return useQuery<Assignment, Error>({
    queryKey: ['assignments', id],
    queryFn: () => api.getAssignmentById(id),
  });
}

// Create assignment
export function useCreateAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.createAssignment,
    onSuccess: () => {
      queryClient.invalidateQueries(['assignments']);
    },
  });
}

// Update assignment
export function useUpdateAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number | string; data: { patientId: number; medicationId: number } }) =>
      api.updateAssignment(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['assignments']);
    },
  });
}

// Delete assignment
export function useDeleteAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number | string) => api.deleteAssignment(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['assignments']);
    },
  });
}
