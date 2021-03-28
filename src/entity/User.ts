import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

export class User extends Model {}
  
 User.init(
    {
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      preferredName: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
    },
    {
      tableName: "users",
      sequelize, // passing the `sequelize` instance is required
    }
  );