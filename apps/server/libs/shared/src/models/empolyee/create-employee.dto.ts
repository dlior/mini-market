import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  firstName: string;

  @IsDateString()
  @IsNotEmpty()
  birthdate: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  photo: string;

  @IsString()
  @IsNotEmpty()
  notes: string;
}
