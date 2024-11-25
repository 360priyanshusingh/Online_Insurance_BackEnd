import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const Agent = require('../models/agent')(sequelize, DataTypes);


export const newAgent = async (body) => {
  const data = await Agent.findOne({where:{userName:body.userName , email:body.email}});
  if (data) {
    return {
      code: HttpStatus.CONFLICT, // 409 status code
      data: [],
      message: "Agent already exists"
    };
  } else {

    const hashedPassword = await bcrypt.hash(body.password, 4);
    body.password = hashedPassword;
    const agent = await Agent.create(body);

    return {
      code: HttpStatus.CREATED, // 201 status code
      data: agent,
      message: "Agent successfully created"
    };

  }

};

//update single Agent
export const AgentLogin = async (body) => {
  const data = await Agent.findOne({ where: { email: body.email } });
  if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: "Agent not found"
    };
  }

  const passwordMatch = await bcrypt.compare(body.password, data.password);

  if (!passwordMatch) {
    return {
      code: HttpStatus.UNAUTHORIZED, // 401 status code
      data: null,
      message: "Agent password is wrong!"
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
    message: "Agent successfully logged in"
  };
};



export const getAgent = async (id) => {
  const data = await Agent.findByPk(id);

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Agent not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Agent successfully retrieved'

}

}
