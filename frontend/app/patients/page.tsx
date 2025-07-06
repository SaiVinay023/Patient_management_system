'use client';
import Layout from "@/components/shared/Layout";
import PatientForm from "@/components/patients/PatientForm";
import PatientList from "@/components/patients/PatientList";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { usePatients } from "@/hooks/usePatients";

export default function PatientsPage() {
  const { data: patients = [], isLoading, isError } = usePatients();

  return (
    <div>
      
      <Layout title="Patients">
        <Breadcrumb paths={[{ label: 'Patients', href: '/patients' }]} />
        <PatientForm />
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Something went wrong loading patients.</p>
        ) : (
          <PatientList patients={patients} />
        )}
      </Layout>
    </div>
  );
}
