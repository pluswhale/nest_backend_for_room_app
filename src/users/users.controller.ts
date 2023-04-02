import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreatUserDto } from "./dto/create-user.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Roles } from "src/auth/roles-auth.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@ApiTags("Пользователи")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Создание пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreatUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Получение списка пользователей" })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(RolesGuard)
  @Roles("ADMIN")
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: "Выдать роль" })
  @ApiResponse({ status: 200 })
  @UseGuards(RolesGuard)
  @Roles("ADMIN")
  @Post("/role")
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: "Забанить пользователя" })
  @ApiResponse({ status: 200 })
  @UseGuards(RolesGuard)
  @Roles("ADMIN")
  @Post("/ban")
  banUser(@Body() dto: BanUserDto) {
    return this.usersService.banUser(dto);
  }
}
