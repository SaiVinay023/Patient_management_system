"use client";

import Layout from "@/components/shared/Layout";
import MedicationForm from "@/components/medications/MedicationForm";
import MedicationList from "@/components/medications/MedicationList";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useMedications } from "@/hooks/useMedications";

export default function MedicationsPage() {
  const { data: medications, isLoading, error } = useMedications();

  if (isLoading) return <p className="p-4">Loading medications...</p>;
  if (error) return <p className="p-4 text-red-600">Error loading medications.</p>;

  return (
    <div>
      
      <Layout title="Medications">
        <Breadcrumb paths={[{ label: "Medications", href: "/medications" }]} />
        <MedicationForm />
        <MedicationList medications={medications || []} />
      </Layout>
    </div>
  );
}
