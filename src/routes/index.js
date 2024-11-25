import express from 'express';
const router = express.Router();

import adminRoute from './admin.route';
import employeeRoute from './employee.route';
import agentRoute from './agent.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/admins', adminRoute);
  router.use('/employees', employeeRoute);
  router.use('/agents', agentRoute);

  return router;
};

export default routes;
