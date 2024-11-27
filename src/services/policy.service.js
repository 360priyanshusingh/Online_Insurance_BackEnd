import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const Policy = require('../models/policy')(sequelize, DataTypes);


export const newPolicy = async (body) => {
    const policy = await Policy.create(body);
    return {
      code: HttpStatus.CREATED, 
      data: policy,
      message: "Policy successfully created"
    };
   
};

export const getPolicyById = async (id) => {
  const data = await Policy.findByPk(id);

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Policy not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Policy successfully retrieved'

}

}

export const getPolicy = async (customerId) => {
  const data = await Policy.findAll({where:{customerId:customerId}});

 if (!data || data.length==0) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Policy not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Policy successfully retrieved'

}

}
