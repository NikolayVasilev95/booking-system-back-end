import {DataTypes, Model} from "sequelize";
import sequelize from "../../config/db_config";

export default class Services extends Model {
    public id!: number;
    public name!: string;
    public employeeId!: string;
    public serviceId!: string;
  }
  
  Services.init(
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
      description: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
      price: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
      positionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
          model: 'positions',
          key: 'id'
        }
      },
    },
    {
      tableName: "services",
      modelName: "Services",
      sequelize,
    }
  );
