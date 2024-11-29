'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class policy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
 
  policy.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      schemeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      policyDetails: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maturityPeriod: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      premium: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dateIssued: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      policyLapseDate:{
        type:DataTypes.STRING,
        allowNull:false,
      }

    }, {
    sequelize,
    modelName: 'policy',
    tableName: 'Policys',
    }
  )
  return policy;
};