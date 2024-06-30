import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateShipperDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  phone: string;
}
