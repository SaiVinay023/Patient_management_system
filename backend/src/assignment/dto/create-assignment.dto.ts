import { IsInt, IsDateString, IsPositive, IsOptional } from 'class-validator';

export class CreateAssignmentDto {
  @IsInt()
  patientId: number;

  @IsInt()
  medicationId: number;

  @IsDateString()
  startDate: string;

  @IsPositive()
  numberOfDays: number;

}
// This DTO is used to create a new assignment of a medication to a patient.
// It includes the patient ID, medication ID, start date, and number of days for the