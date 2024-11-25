import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const Employee = require('../models/employee')(sequelize, DataTypes);



//create new Employee
export const newEmployee = async (body) => {
  const data = await Employee.findOne({where:{userName:body.userName , email:body.email}});
  if (data) {
    return {
      code: HttpStatus.CONFLICT, // 409 status code
      data: [],
      message: "Employee already exists"
    };
  } else {

    const hashedPassword = await bcrypt.hash(body.password, 4);
    body.password = hashedPassword;
    const employee = await Employee.create(body);

    return {
      code: HttpStatus.CREATED, // 201 status code
      data: employee,
      message: "Employee successfully created"
    };

  }

};

//update single Employee
export const EmployeeLogin = async (body) => {
  const data = await Employee.findOne({ where: { email: body.email } });
  if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: "Employee not found"
    };
  }

  const passwordMatch = await bcrypt.compare(body.password, data.password);

  if (!passwordMatch) {
    return {
      code: HttpStatus.UNAUTHORIZED, // 401 status code
      data: null,
      message: "Employee password is wrong!"
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
    message: "Employee successfully logged in"
  };
};



export const getEmployee = async (id) => {
  const data = await Employee.findByPk(id);

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Employee not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Employee successfully retrieved'

}

}
