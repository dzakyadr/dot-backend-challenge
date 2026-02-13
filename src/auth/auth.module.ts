import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      // Ambil secret dari .env, kalau gak ada pakai default
      secret: process.env.JWT_SECRET || 'defaultSecret',
      signOptions: { expiresIn: '1h' }, // Token bakal hangus dalam 1 jam
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
