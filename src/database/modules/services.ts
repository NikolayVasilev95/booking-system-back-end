import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db_config";
import Positions from "./positions";

export default class Services extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: string;
}

Services.init(
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
    description: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    price: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "positions",
        key: "id",
      },
    },
  },
  {
    tableName: "services",
    modelName: "Services",
    sequelize,
  }
);
