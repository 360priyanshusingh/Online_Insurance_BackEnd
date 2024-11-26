import HttpStatus from 'http-status-codes';
import * as SchemeService from '../services/scheme.service';


export const getSchemeById = async (req, res, next) => {
  try {
    const data = await SchemeService.getSchemeById(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const getScheme = async (req, res, next) => {
  try {
    const data = await SchemeService.getScheme();
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
 * Controller to create a new Scheme
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newScheme = async (req, res, next) => {
  try {
    const data = await SchemeService.newScheme(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};


