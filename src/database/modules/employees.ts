import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Positions from "./positions";

export default class Employees extends Model {
  public id!: number;
  public firstName!: string;
  public middleName!: string;
  public lastName!: string;
  public img!: string;
  public description!: string;
}

Employees.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    middleName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    img: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    positionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "positions",
        key: "id",
      },
    },
    scheduleId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "schedules",
        key: "id",
      },
    },
  },
  {
    tableName: "employees",
    modelName: "Employees",
    sequelize,
  }
);
