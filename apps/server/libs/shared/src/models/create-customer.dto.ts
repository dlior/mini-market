import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsInt()
  @IsPositive()
  postalCode: number;

  @IsString()
  @IsNotEmpty()
  country: string;
}
