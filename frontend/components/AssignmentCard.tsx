// components/AssignmentCard.tsx
type Props = {
  assignment: {
    id: number;
    patientId: number;
    medicationId: number;
    startDate: string;
    numberOfDays: number;
    remainingDays: number;
  };
};

export default function AssignmentCard({ assignment }: Props) {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-lg font-semibold">Assignment #{assignment.id}</h2>
      <p>Patient ID: {assignment.patientId}</p>
      <p>Medication ID: {assignment.medicationId}</p>
      <p>Start Date: {new Date(assignment.startDate).toLocaleDateString()}</p>
      <p>Duration: {assignment.numberOfDays} days</p>
      <p className="font-bold text-blue-600">
        Remaining Days: {assignment.remainingDays}
      </p>
    </div>
  );
}
// This component displays a single assignment card with details like patient ID, medication ID, start date, duration, and remaining days.
// It uses Tailwind CSS for styling.