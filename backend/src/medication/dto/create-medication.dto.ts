import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateMedicationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString() 
  dosage?: string;

  @IsOptional()
  @IsString() 
  frequency?: string;
}
