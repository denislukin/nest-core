import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";
import { UsersService } from "./users.service";

@ApiTags('users')
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({summary: 'User creation'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @ApiOperation({summary: 'Geetting users'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
