import { IsString, IsNotEmpty } from 'class-validator';

export class SignupUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  //   @MinLength(8)
  password: string;
}

export class LoginUserDto extends SignupUserDto {}
