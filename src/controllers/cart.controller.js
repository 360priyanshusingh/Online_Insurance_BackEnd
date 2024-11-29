import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';


export const getCartById = async (req, res, next) => {
  try {
    const data = await CartService.getCartById(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const data = await CartService.getCart(req.body.userId);
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
 * Controller to create a new Cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newCart = async (req, res, next) => {
  try {
    const data = await CartService.newCart(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const addPolicyIntoCart = async (req, res, next) => {
  try {
    const data = await CartService.addPolicyIntoCart(req.body.userId,req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const removePolicyFromCart = async (req, res, next) => {
  try {
    const data = await CartService.removePolicyFromCart(req.body.userId,req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};


