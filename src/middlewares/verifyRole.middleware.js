import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export const  verifyRole = (Role) => {
    return async (req, res, next) => {
      // Access the additional parameter
      try {
        if (req.body.role === Role) {
          delete req.body.role
          next();  
        } else {
          throw {
            code: HttpStatus.BAD_REQUEST,
            message: 'Unauthorized Role!'
          };
        }
      } catch (error) {
       
        next(error);
      }

    };
  };