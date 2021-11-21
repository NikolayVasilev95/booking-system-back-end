import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Employees from "./employees";
import Schedules from "./schedules";

export default class Calendars extends Model {
  public id!: number;
  public name!: string;
}

Calendars.init(
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
    employeeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "employees",
        key: "id",
      },
    },
  },
  {
    tableName: "calendars",
    modelName: "Calendars",
    sequelize,
  }
);

Calendars.hasMany(Schedules, {
  foreignKey: "calendarId",
  foreignKeyConstraint: true,
});
