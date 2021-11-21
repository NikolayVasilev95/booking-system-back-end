import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Employees from "./employees";
import Services from "./services";

export default class Positions extends Model {
  public id!: number;
  public name!: string;
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
    salonId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: "salons",
        key: "id",
      },
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
Positions.hasMany(Services, {
  foreignKey: "positionId",
  foreignKeyConstraint: true,
});
