import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}
  async login(userDto: CreateUserDto) {}
  async registration(userDto: CreateUserDto) {
    try {
      const condidate = await this.userService.getUserByEmail(userDto.email);
      if (condidate) {
        throw new HttpException(
          "User with this email already existed",
          HttpStatus.BAD_REQUEST
        );
      }
    } catch (e) {}
  }
}
