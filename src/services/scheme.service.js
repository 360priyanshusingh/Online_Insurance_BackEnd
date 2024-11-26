import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const Scheme = require('../models/scheme')(sequelize, DataTypes);


export const newScheme = async (body) => {
    const scheme = await Scheme.create(body);
    return {
      code: HttpStatus.CREATED, 
      data: scheme,
      message: "Scheme successfully created"
    };

};

export const getSchemeById = async (id) => {
  const data = await Scheme.findByPk(id);

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Scheme not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Scheme successfully retrieved'

}

}

export const getScheme = async () => {
  const data = await Scheme.findAll();

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Scheme not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Scheme successfully retrieved'

}

}
