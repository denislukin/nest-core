import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from "src/roles/roles.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.rolesService.getRoleByValue("USER");
    await user.$set("roles", [role.id]);
    return user;
  }

  async getUserByEmail(email: string) {
    const user = this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async getAllUsers() {
    return this.userRepository.findAll({ include: { all: true } });
  }
}
