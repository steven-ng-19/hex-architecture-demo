import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateUserDto } from '../../applications/dtos';
import { UserService } from '../../applications/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Post()
  createUser(@Body() data: CreateUserDto) {
    return this._userService.saveUser(data);
  }

  @Get()
  getUsers() {
    return this._userService.getListUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this._userService.getUserById(id);
  }
}
