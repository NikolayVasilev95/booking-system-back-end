import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Positions from "./positions";

export default class Salons extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
  public salonId!: string;
}

Salons.init(
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

Salons.hasMany(Positions, {
  foreignKey: "salonId",
  foreignKeyConstraint: true,
});
