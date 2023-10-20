const { Router } = require("express");
const mercadoPagoRouter = Router();
const mercadopagoHandlers = require("../handlers/mercadopago/mercadopagoHandler");

mercadoPagoRouter.post("/createOrder", mercadopagoHandlers.createOrderHandler);
mercadoPagoRouter.get("/success", mercadopagoHandlers.handleSuccessHandler);

module.exports = mercadoPagoRouter;
