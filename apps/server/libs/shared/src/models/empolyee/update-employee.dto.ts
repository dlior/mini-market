import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  photo?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  notes?: string;
}
