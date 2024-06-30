import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  contact: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  address: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  country: string;

  @IsInt()
  @IsPositive()
  postalCode: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  phone: string;
}
