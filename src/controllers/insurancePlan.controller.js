import HttpStatus from 'http-status-codes';
import * as InsurancePlanService from '../services/insurancePlan.service';


export const getInsurancePlanById = async (req, res, next) => {
  try {
    const data = await InsurancePlanService.getInsurancePlanById(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const getInsurancePlan = async (req, res, next) => {
  try {
    const data = await InsurancePlanService.getInsurancePlan();
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
 * Controller to create a new InsurancePlan
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newInsurancePlan = async (req, res, next) => {
  try {
    const data = await InsurancePlanService.newInsurancePlan(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};


