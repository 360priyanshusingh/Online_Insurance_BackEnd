import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { where } from 'sequelize';
dotenv.config()
const Payment = require('../models/payment')(sequelize, DataTypes);
const Customer = require('../models/customer')(sequelize, DataTypes);
const Cart = require('../models/cart')(sequelize, DataTypes);
const Commission=require('../models/commission')(sequelize, DataTypes);


export const newPayment = async (customerId) => {
    const cart= await Cart.findOne({where:{customerId:customerId}}) 

    if(!cart || cart.policys.length==0){
        return{
            code:HttpStatus.NOT_FOUND,
            data:[],
            message:"cart not found "
        }

    }
    else{

        const customer = await Customer.findOne({where:{id:customerId}})

        if(!customer){
            return{
                code:HttpStatus.NOT_FOUND,
                data:[],
                message:"customer not found "
            }
        }
     
       const payment= await Payment.create({
        customerId:customerId,
        totalAmount:cart.totalPremium,
        agentCommission:cart.agentCommission,
        policys:cart.policys    
       }) 

       const commission = await Commission.create({
        paymentId:payment.id,
        agentId:customer.agentId,
        commissionAmount:payment.agentCommission
       })

       await Cart.destroy({where:{id:cart.id}});

       if(!commission){
        return {
            code: HttpStatus.INTERNAL_SERVER_ERROR,
            data: [],
            message: "Failed to create commission due to a server error",
           };    
       }
       else{
        return {
            code: HttpStatus.CREATED, 
            data: payment,
            message: "Payment successfully created"
          };
       }
    }

     
};


export const getPaymentById = async (id) => {
  const data = await Payment.findByPk(id);

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Payment not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Payment successfully retrieved'

}

}

export const getPayment = async (customerId) => {
  const data = await Payment.findAll({where:{customerId:customerId}});

 if (!data || data.length==0) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Payment not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Payment successfully retrieved'

}

}
