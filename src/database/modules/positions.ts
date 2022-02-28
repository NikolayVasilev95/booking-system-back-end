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
      type: DataTypes.INTEGER,
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
  sourceKey: "id",
  foreignKey: "positionId",
  as: "employees",
  foreignKeyConstraint: true,
});
Employees.belongsTo(Positions, {
  foreignKey: "positionId",
  as: "positions",
});

// Positions.belongsToMany(Services, {
//   through: "position_service",
//   as: "services",
//   foreignKey: "positionId",
// });
// Services.belongsToMany(Positions, {
//   through: "position_service",
//   as: "positions",
//   foreignKey: "serviceId",
// });

Positions.hasMany(Services, {
  sourceKey: "id",
  foreignKey: "positionId",
  as: "services",
  foreignKeyConstraint: true,
});
Services.belongsTo(Positions, {
  foreignKey: "positionId",
  as: "positions",
});
