import { ApiProperty } from '@nestjs/swagger';

export class CreatUserDto {
  @ApiProperty({
    example: 'usermail@gmail.com',
    description: 'Email пользователя',
  })
  readonly email: string;

  @ApiProperty({
    example: '12345678',
    description: 'Пароль',
  })
  readonly password: string;
}
