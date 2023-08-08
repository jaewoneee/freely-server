import { Body, Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { LoginUserDto } from './dto/user.request.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    try {
      const loginResult = await this.userService.login(loginUserDto);
      console.log('result====>', loginResult);
      return loginResult;
    } catch (error) {}

    // const { username, password } = request.body;
    // console.log(username, password);
  }
}
