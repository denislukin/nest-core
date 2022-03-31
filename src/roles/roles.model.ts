import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { UserRoles } from "./user-roles.model";

interface RoleCreationlAttrs {
  value: string;
  description: string;
}
@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationlAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => Role, () => UserRoles)
  users: Role[];
}
