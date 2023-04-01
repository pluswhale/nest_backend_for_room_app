import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: '1', description: 'Уникальный id пользователя' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @ApiProperty({
    example: 'admin',
    description: 'значение роли пользователя',
  })
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;

  @ForeignKey(() => User)
  @ApiProperty({
    example: 'Роль пользователя дате доступ ко всех вкладкм',
    description: 'Описание роли пользователя',
  })
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
}
