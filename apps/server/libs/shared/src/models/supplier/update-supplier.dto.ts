import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

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

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Max(9999999)
  postalCode?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  phone?: string;
}
