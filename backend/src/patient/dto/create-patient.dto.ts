import { IsDateString, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;
}
