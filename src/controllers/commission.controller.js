import HttpStatus from 'http-status-codes';
import * as CommissionService from '../services/commission.service';


export const getCommissionById = async (req, res, next) => {
  try {
    const data = await CommissionService.getCommissionById(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const getCommissionByPaymentId = async (req, res, next) => {
  try {
    const data = await CommissionService.getCommissionByPaymentId(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const getCommissionByPolicyId = async (req, res, next) => {
  try {
    const data = await CommissionService.getCommissionByPolicyId(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const getCommission = async (req, res, next) => {
  try {
    const data = await CommissionService.getCommission(req.body.userId);
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
 * Controller to create a new Commission
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newCommission = async (req, res, next) => {
  try {
    const data = await CommissionService.newCommission(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};



