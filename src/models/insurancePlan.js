'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class insurancePlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
 
  insurancePlan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      planName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planDetails: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
    sequelize,
    modelName: 'insurancePlan',
    tableName: 'InsurancePlans',
    }
  )
  return insurancePlan;
};