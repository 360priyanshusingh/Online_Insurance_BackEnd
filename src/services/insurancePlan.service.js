import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const InsurancePlan = require('../models/insurancePlan')(sequelize, DataTypes);


export const newInsurancePlan = async (body) => {

    const insurancePlan = await InsurancePlan.create(body);

    return {
      code: HttpStatus.CREATED, 
      data: insurancePlan,
      message: "InsurancePlan successfully created"
    };

};

//update single InsurancePlan



export const getInsurancePlanById = async (id) => {
  const data = await InsurancePlan.findByPk(id);

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'InsurancePlan not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'InsurancePlan successfully retrieved'

}

}

export const getInsurancePlan = async () => {
  const data = await InsurancePlan.findAll();

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'InsurancePlan not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'InsurancePlan successfully retrieved'

}

}
