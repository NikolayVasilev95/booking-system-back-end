import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Calendars from "./calendars";
import Positions from "./positions";
import Salons from "./salons";

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
      type: DataTypes.INTEGER,
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
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "positions",
        key: "id",
      },
    },
    salonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "salons",
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

// Employees.belongsTo(Positions, {
//   foreignKey: "positionId",
//   targetKey: "positionId",
// });
// Employees.belongsTo(Salons, { foreignKey: "salonId", targetKey: "salonId" });
Employees.hasOne(Calendars, {
  foreignKey: "employeeId",
  foreignKeyConstraint: true,
});
