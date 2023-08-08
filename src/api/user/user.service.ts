import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/user.request.dto';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService) {}

  getHello() {
    return 'User API';
  }

  login(loginUserDto: LoginUserDto) {
    if (!loginUserDto) throw new UnauthorizedException('Not authorized user');

    return this.jwtService.sign(loginUserDto);
  }
}
