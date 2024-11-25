import HttpStatus from 'http-status-codes';
import * as AdminService from '../services/admin.service.js';

/**
 * Controller to get all Admins available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllAdmins = async (req, res, next) => {
  try {
    const data = await AdminService.getAllAdmins();
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
 * Controller to get a single Admin
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAdmin = async (req, res, next) => {
  try {
    const data = await AdminService.getAdmin(req.params.id);
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
 * Controller to create a new Admin
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newAdmin = async (req, res, next) => {
  try {
    const data = await AdminService.newAdmin(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const adminLogin = async (req, res, next) => {
  try {
    const data = await AdminService.adminLogin(req.body);
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
 * Controller to update a Admin
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateAdmin = async (req, res, next) => {
  try {
    const data = await AdminService.updateAdmin(req.params.id, req.body);
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
 * Controller to delete a single Admin
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteAdmin = async (req, res, next) => {
  try {
    await AdminService.deleteAdmin(req.params.id);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
  
};
