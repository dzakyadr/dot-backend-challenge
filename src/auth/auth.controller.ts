import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth') // URL: http://localhost:3000/auth
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login') // URL: http://localhost:3000/auth/login
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}