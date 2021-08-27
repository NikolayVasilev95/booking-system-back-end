import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Employees from "./employees";
import Services from "./services";

export default class Positions extends Model {
  public id!: number;
  public name!: string;
  public employeeId!: string;
  public serviceId!: string;
}

Positions.init(
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
    tableName: "positions",
    modelName: "Positions",
    sequelize,
  }
);

Positions.hasMany(Employees, {
  foreignKey: "positionId",
  foreignKeyConstraint: true,
});
Positions.hasOne(Services, {
  foreignKey: "positionId",
  foreignKeyConstraint: true,
});
