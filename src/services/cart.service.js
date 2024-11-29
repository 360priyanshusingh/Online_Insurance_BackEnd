import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const Policy = require('../models/policy')(sequelize, DataTypes);
const Cart = require('../models/cart')(sequelize, DataTypes);
const Customer = require('../models/customer')(sequelize, DataTypes);




export const addPolicyIntoCart = async (customerId,policyId) => {
    let cart = await Cart.findOne({ where: { customerId: customerId } });

    if (!cart) {
        cart = await Cart.create({ customerId : customerId });
        
        const policy = await Policy.findOne({ where: { id: policyId} });
        if (!policy) {
            return  { code: HttpStatus.NOT_FOUND, message: 'Policy not found' };
        }

        cart.totalPremium = policy.premium*policy.maturityPeriod;
        cart.agentCommission = (policy.premium * 10 )/100;
      
        cart.policys = cart.policys || [];  
        cart.policys = [...cart.policys, policyId];

       
        await cart.save();

    } else {
 
        let existingPolicy = cart.policys.find((policy) => {
            if(policy == policyId){
                return policy
            }
        });

        console.log(existingPolicy)

        if (existingPolicy) {
            return {
                code: HttpStatus.CONFLICT, // 409 status code
                data: [],
                message: "PolicyId already exists"
              };
           
        } else {
            
            const policy = await Policy.findOne({ where: { id: policyId} });

            if (!policy) {
                return  { code: HttpStatus.NOT_FOUND, message: 'Policy not found' };
            }
    
            cart.totalPremium += policy.premium*policy.maturityPeriod;
            cart.agentCommission += (policy.premium * 10 )/100;
          
            cart.policys = cart.policys || [];  
            cart.policys = [...cart.policys, policyId];
    
           
            await cart.save();
        }
    }

    return {
        code: HttpStatus.OK,
        data: cart,
        message: 'Cart successfully updated',
    };

    
   
};

export const removePolicyFromCart = async (customerId,policyId) => {
  let cart = await Cart.findOne({ where: { customerId: customerId } });

  if (!cart) {
      return {
          code: HttpStatus.NOT_FOUND,
          data: [],
          message: 'Cart Not FOUND !',
      };

  } else {

      let existingPolicy = cart.policys.find((policy) => {
          if(policy == policyId){
              return policy
          }
      });
      console.log(existingPolicy)

      if (existingPolicy) {

          let updatedPolicy = cart.policys.filter((policy)=>(policy!=policyId))

          cart.policys=[...updatedPolicy]

          const policy = await Policy.findOne({ where: { id: policyId} });
          if (!policy) {
              return  { code: HttpStatus.NOT_FOUND, message: 'Policy not found' };
          }
  
          cart.totalPremium -= policy.premium*policy.maturityPeriod;
          cart.agentCommission -= (policy.premium * 10 )/100;
  
          // console.log("Updated cart books",cart.policys)
          await cart.save();
      } else {
          
          return {
              code: HttpStatus.NOT_FOUND,
              data: [],
              message: 'Cart Policy not Exit !',
          };
      }
  }

  return {
    code: HttpStatus.OK, 
    data: cart,
    message: 'Policy successfully removed from cart',
  };


  
};


export const getCart = async (customerId) => {
  const data = await Cart.findOne({where:{customerId:customerId}});

 if (!data || data.length==0) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Cart not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Cart successfully retrieved'

}

}
