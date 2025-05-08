import { IsString, IsEmail } from 'class-validator';

export class CreateContactDto {
  @IsString()
  nom: string;

  @IsEmail()
  email: string;

  @IsString()
  sujet: string;

  @IsString()
  message: string;
}
