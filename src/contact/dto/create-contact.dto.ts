import { IsString, IsEmail } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  sujet: string;

  @IsString()
  message: string;
}
