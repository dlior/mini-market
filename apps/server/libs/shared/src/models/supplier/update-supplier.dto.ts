import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateSupplierDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  contact?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  address?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  city?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  country?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  postalCode?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  phone?: string;
}
