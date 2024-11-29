import HttpStatus from 'http-status-codes';
import * as PaymentService from '../services/payment.service';


export const getPaymentById = async (req, res, next) => {
  try {
    const data = await PaymentService.getPaymentById(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const getPayment = async (req, res, next) => {
  try {
    const data = await PaymentService.getPayment(req.body.userId);
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
 * Controller to create a new Payment
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newPayment = async (req, res, next) => {
  try {
    const data = await PaymentService.newPayment(req.body.userId);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};



