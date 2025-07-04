import { IsInt, IsDateString, IsPositive } from 'class-validator';

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
