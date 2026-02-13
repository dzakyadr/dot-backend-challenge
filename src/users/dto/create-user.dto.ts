import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Format email tidak valid' })
  @IsNotEmpty()
  email!: string; // <-- Tambah tanda seru di sini

  @IsNotEmpty()
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password!: string; // <-- Tambah tanda seru di sini
}