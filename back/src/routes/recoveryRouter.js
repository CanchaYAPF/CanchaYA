const recoveryController = require('../controllers/user/recoverpw');
const resetController = require('../controllers/user/resetpw');
const { Router } = require("express");

const recoveryRouter = Router();

recoveryRouter.post('/forgot-password', recoveryController.requestPasswordRecovery);
recoveryRouter.post('/reset-password', resetController.resetPassword);

module.exports = recoveryRouter;
