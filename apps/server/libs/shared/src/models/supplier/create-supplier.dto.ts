import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  postalCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  phone: string;
}
