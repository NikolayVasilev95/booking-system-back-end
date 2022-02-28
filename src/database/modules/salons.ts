import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Employees from "./employees";

export default class Salons extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
}

Salons.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "salons",
    modelName: "Salons",
    sequelize,
  }
);

Salons.hasMany(Employees, {
  sourceKey: "id",
  foreignKey: "salonId",
  as: "employees",
  foreignKeyConstraint: true,
});
Employees.belongsTo(Salons, { foreignKey: "salonId", as: "salons" });
