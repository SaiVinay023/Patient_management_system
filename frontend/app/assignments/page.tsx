'use client';

import Layout from '@/components/shared/Layout';
import Breadcrumb from '@/components/shared/Breadcrumb';
import AssignmentList from '@/components/assignments/AssignmentList';
import AssignmentForm from '@/components/assignments/AssignmentForm';
import { Assignment } from '@/types';
import { useAssignments, useDeleteAssignment, useUpdateAssignment } from '@/hooks/useAssignments';
import { useState } from 'react';

export default function AssignmentsPage() {
  const { data: assignments = [], isLoading } = useAssignments();
  const { mutateAsync: deleteAssignment } = useDeleteAssignment();
  const { mutateAsync: updateAssignment } = useUpdateAssignment();
  const [editData, setEditData] = useState<Assignment | undefined>(undefined);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Layout title="Assignments">
      <Breadcrumb paths={[{ label: 'Assignments', href: '/assignments' }]} />

      <AssignmentForm
        onSuccess={() => setEditData(undefined)}
        initialData={editData}
      />

      <AssignmentList
  assignments={assignments || []}
  onDelete={(id) => deleteAssignment(id)}
  onEdit={(a) => updateAssignment({ id: a.id, data: a })}
/>
    </Layout>
  );
}
