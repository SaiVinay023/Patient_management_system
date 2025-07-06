'use client';

import Layout from '@/components/shared/Layout';
import Breadcrumb from '@/components/shared/Breadcrumb';
import AssignmentList from '@/components/assignments/AssignmentList';
import AssignmentForm from '@/components/assignments/AssignmentForm';
import { Assignment } from '@/types';
import { useAssignments, useDeleteAssignment } from '@/hooks/useAssignments';
import { useState } from 'react';

export default function AssignmentsPage() {
  const { data: assignments = [], isLoading } = useAssignments();
  const { mutate: deleteAssignment } = useDeleteAssignment();
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
        assignments={assignments}
        onEdit={setEditData}
        onDelete={(id) => deleteAssignment(id)}
      />
    </Layout>
  );
}
