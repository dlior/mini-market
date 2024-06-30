import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateCustomerDto {
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
  postalCode?: number;
}
