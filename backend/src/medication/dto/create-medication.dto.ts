import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateMedicationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString() // ❌ This will still trigger if the field is not provided
  dosage?: string;

  @IsOptional()
  @IsString() // ❌ Same issue as above
  frequency?: string;
}
