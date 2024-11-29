'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  cart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers',
          key: 'id',
        },
      },
      totalPremium: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      agentCommission: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      policys: {
        type: DataTypes.JSONB,  
        allowNull: true,
        defaultValue: [],  
      },
    },
    {
      sequelize,
      modelName: 'cart',
      tableName: 'Carts',
    }
  );

  return cart;
};