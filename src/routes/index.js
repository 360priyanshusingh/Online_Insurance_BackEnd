import express from 'express';
const router = express.Router();

import adminRoute from './admin.route';
import employeeRoute from './employee.route';
import agentRoute from './agent.route';
import customerRoute from './customer.route';
import insurancePlanRoute from './insurancePlan.route';
import schemeRoute from './scheme.route';
import policyRoute from './policy.route';
import cartRoute from './cart.route';
import paymentRoute from './payment.route';
import commissionRoute from './commission.route';

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
  router.use('/customers', customerRoute);
  router.use('/insurancePlans', insurancePlanRoute);
  router.use('/schemes', schemeRoute);
  router.use('/policys', policyRoute);
  router.use('/carts', cartRoute);
  router.use('/payments', paymentRoute);
  router.use('/commissions',commissionRoute);

  return router;
};

export default routes;
