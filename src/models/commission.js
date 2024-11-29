'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
 
  commission.init(
    {
      
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      paymentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Payments',
          key: 'id',
        },
      },
      agentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Agents',
          key: 'id',    
        },
      },
      commissionAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
    sequelize,
    modelName: 'commission',
    tableName: 'Commissions',
    }
  )
  return commission;
};