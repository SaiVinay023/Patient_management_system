'use client';

import { useState } from "react";
import { useCreateMedication } from "@/hooks/useMedications";

export default function MedicationForm() {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");

  const { mutateAsync, isPending } = useCreateMedication();

  const handleSubmit = async () => {
    if (!name.trim()) return;

    try {
      await mutateAsync({
        name: name.trim(),
        dosage: dosage.trim() || undefined,
        frequency: frequency.trim() || undefined,
      });

      // Reset form
      setName("");
      setDosage("");
      setFrequency("");
    } catch (error) {
      console.error("Error creating medication:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-4 w-full max-w-md">
      <input
        className="border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Medication Name"
        required
      />
      <input
        className="border p-2 rounded"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
        placeholder="Dosage (optional)"
      />
      <input
        className="border p-2 rounded"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        placeholder="Frequency (optional)"
      />
      <button
        onClick={handleSubmit}
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isPending ? "Adding..." : "Add"}
      </button>
    </div>
  );
}
