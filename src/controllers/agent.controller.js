import HttpStatus from 'http-status-codes';
import * as AgentService from '../services/agent.service';


export const getAgent = async (req, res, next) => {
  try {
    const data = await AgentService.getAgent(req.body.userId);
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
 * Controller to create a new Agent
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newAgent = async (req, res, next) => {
  try {
    const data = await AgentService.newAgent(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

export const AgentLogin = async (req, res, next) => {
  try {
    const data = await AgentService.AgentLogin(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message:data.message
    });
  } catch (error) {
    next(error);
  }
};

