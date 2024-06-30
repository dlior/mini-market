import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateShipperDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  phone: string;
}
