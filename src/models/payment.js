'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  payment.init(
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
      totalAmount: { // Corrected typo
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
      modelName: 'payment',
      tableName: 'Payments',
    }
  );

  return payment;
};