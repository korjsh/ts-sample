import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";

export interface UserAttribute {
  id: number;
  userId: string;
  password: string;
  name: string;
}

class User extends Model {
  public readonly id!: number;
  public userId!: string;
  public password!: string;
  public name!: string;
}

const columns = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: new DataTypes.STRING(),
    allowNull: false,
    unique: true,
  },
  password: {
    type: new DataTypes.STRING(500),
    allowNull: false
  },
  name: {
    type: new DataTypes.STRING(100),
  },
};
const options = {
  sequelize,
  // tableName: 'tableName', // table명을 수동으로 생성 함
  // freezeTableName: true, // true: table명의 복수형 변환을 막음
  underscored: true, // true: underscored, false: camelCase
  timestamps: true, // createAt, updatedAt
  paranoid: true, // deletedAt
};
User.init(columns, options);

export interface UserInsertParams {
  id: number;
  userId: string;
  password: string;
  name: string;
}

export interface UserUpdateParams {
  id: number;
  password?: string;
  name?: string
}
export interface UserDeleteParams {
  id: number;
}

export default User;
