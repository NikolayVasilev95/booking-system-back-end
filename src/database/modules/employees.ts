import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Positions from "./positions";

export default class Employees extends Model {
  public id!: number;
  public name!: string;
}

Employees.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
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
