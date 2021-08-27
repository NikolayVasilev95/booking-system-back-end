import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Employees from "./employees";

export default class Schedules extends Model {
  public id!: number;
  public name!: string;
}

Schedules.init(
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
  },
  {
    tableName: "schedules",
    modelName: "Schedules",
    sequelize,
  }
);

Schedules.hasOne(Employees, {
  foreignKey: "scheduleId",
  foreignKeyConstraint: true,
});
