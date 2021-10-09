import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Employees from "./employees";

export default class Schedules extends Model {
  public id!: number;
  public start!: string;
  public end!: string;
  public status!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public picture!: string;
  public phone!: string;
}

Schedules.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    start: {
      type: new DataTypes.DATE(),
      allowNull: false,
    },
    end: {
      type: new DataTypes.DATE(),
      allowNull: false,
    },
    status: {
      // type: new DataTypes.ENUM("reserve", "pending"),
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    picture: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    phone: {
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
