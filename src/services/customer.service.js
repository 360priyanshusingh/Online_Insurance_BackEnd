import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const Customer = require('../models/customer')(sequelize, DataTypes);


export const newCustomer = async (body) => {

  const data = await Customer.findOne({where:{email:body.email}});
  if (data) {
    return {
      code: HttpStatus.CONFLICT, 
      data: [],
      message: "Customer already exists"
    };
  } else {
    body.agentId=body.userId
    delete body.userId;

    const hashedPassword = await bcrypt.hash(body.password, 4);
    body.password = hashedPassword;
    const customer = await Customer.create(body);

    return {
      code: HttpStatus.CREATED, // 201 status code
      data: customer,
      message: "Customer successfully created"
    };

  }

};

//update single Customer
export const CustomerLogin = async (body) => {
  const data = await Customer.findOne({ where: { email: body.email } });
  if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, 
      data: null,
      message: "Customer not found"
    };
  }

  const passwordMatch = await bcrypt.compare(body.password, data.password);

  if (!passwordMatch) {
    return {
      code: HttpStatus.UNAUTHORIZED, // 401 status code
      data: null,
      message: "Customer password is wrong!"
    };
  }

  const token = jwt.sign(
    {
      userId: data.id,
      email: data.email,
      role: data.role
    },
    process.env.JWT_SECRET
  );

  return {
    code: HttpStatus.ACCEPTED, // 202 status code (Accepted for processing)
    data: token,
    message: "Customer successfully logged in"
  };
};



export const getCustomer = async (id) => {
  const data = await Customer.findByPk(id);

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Customer not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Customer successfully retrieved'

}

}
