const recoveryController = require('../controllers/user/recoverpw');
const { Router } = require("express");

const recoveryRouter = Router();

recoveryRouter.post('/forgot-password', recoveryController.requestPasswordRecovery);
recoveryRouter.post('/reset-password', recoveryController.resetPassword);

module.exports = recoveryRouter;
