import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { where } from 'sequelize';
dotenv.config()
const Commission = require('../models/Commission')(sequelize, DataTypes);
const Customer = require('../models/customer')(sequelize, DataTypes);
const Policy = require('../models/policy')(sequelize, DataTypes);


export const newCommission = async (body) => {
    const Commission = await Commission.create(body);
    return {
      code: HttpStatus.CREATED, 
      data: Commission,
      message: "Commission successfully created"
    };
   
};


export const getCommissionById = async (id) => {
  const data = await Commission.findByPk(id);

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND,
      data: null,
      message: 'Commission not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Commission successfully retrieved'
}

}

export const getCommissionByPaymentId = async (paymentId) => {
  const data = await Commission.findOne({where:{paymentId:paymentId}});

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND,
      data: null,
      message: 'Commission not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Commission successfully retrieved'
}

}

export const getCommissionByPolicyId = async (policyId) => {
  const data = await Policy.findOne({where:{id:policyId}});

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND,
      data: null,
      message: 'Commission not found'
    };
  }

  const totalPremium=data.premium*data.maturityPeriod
  const commission= (totalPremium * 10) /100 

  return {
    code: HttpStatus.OK, // 200 status code
    data:commission,
    message: 'Commission successfully retrieved'
}

}

export const getCommission = async (agentId) => {
  const data = await Commission.findAll({where:{agentId:agentId}});

  const totalCommission = data.reduce((totalCommission, commission) => totalCommission + commission.commissionAmount,0);
 if (!data || data.length==0) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Commission not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:totalCommission,
    message: 'Commission successfully retrieved!'
}

}
