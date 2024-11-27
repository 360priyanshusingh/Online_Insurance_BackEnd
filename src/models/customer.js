'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
 
  customer.init(
    {
      
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agentId:{
          type:DataTypes.INTEGER,
          allowNull: false,
      },
      policys:{
          type:DataTypes.JSONB,
          allowNull: false,
          defaultValue:[]
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"Customer",
      }
    }, {
    sequelize,
    modelName: 'customer',
    tableName: 'Customers',
    }
  )
  return customer;
};