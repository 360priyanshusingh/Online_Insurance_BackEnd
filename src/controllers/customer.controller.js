import HttpStatus from 'http-status-codes';
import * as CustomerService from '../services/customer.service';


export const getCustomer = async (req, res, next) => {
  try {
    const data = await CustomerService.getCustomer(req.body.userId);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new Customer
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newCustomer = async (req, res, next) => {
  try {
    const data = await CustomerService.newCustomer(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const CustomerLogin = async (req, res, next) => {
  try {
    const data = await CustomerService.CustomerLogin(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

