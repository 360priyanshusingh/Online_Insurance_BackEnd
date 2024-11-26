'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scheme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
 
  scheme.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      schemeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      schemeDetails: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planId:{
        type: DataTypes.INTEGER,
        allowNull:false
      }

    }, {
    sequelize,
    modelName: 'scheme',
    tableName: 'Schemes',
    }
  )
  return scheme;
};