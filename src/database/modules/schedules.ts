import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Employees from "./employees";

export default class Schedules extends Model {
  public id!: number;
  public name!: string;
  public start!: string;
  public end!: string;
  public status!: string;
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
    start: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
    end: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
    status: {
      // type: new DataTypes.ENUM("reserve", "pending"),
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    calendarId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "calendars",
        key: "id",
      },
    },
  },
  {
    tableName: "schedules",
    modelName: "Schedules",
    sequelize,
  }
);
