import HttpStatus from 'http-status-codes';
import * as PolicyService from '../services/policy.service';


export const getPolicyById = async (req, res, next) => {
  try {
    const data = await PolicyService.getPolicyById(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const getPolicy = async (req, res, next) => {
  try {
    const data = await PolicyService.getPolicy(req.body.userId);
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
 * Controller to create a new Policy
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newPolicy = async (req, res, next) => {
  try {
    const data = await PolicyService.newPolicy(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};


