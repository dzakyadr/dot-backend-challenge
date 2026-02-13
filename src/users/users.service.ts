import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    // Cek apakah email sudah ada
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Email sudah terdaftar!');
    }

    // Acak password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan ke DB
    const newUser = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Sembunyikan password dari respon
    const { password: _, ...result } = newUser;
    return {
      message: 'User berhasil mendaftar',
      data: result,
    };
  }
}
