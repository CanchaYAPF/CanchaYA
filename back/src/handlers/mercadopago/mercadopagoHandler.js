const mercadopagoController = require("../../controllers/mercadopago/postMercadoPago");


const createOrderHandler = (req, res) => {
    mercadopagoController.createOrder(req, res);
};

const handleSuccessHandler = (req, res) => {
    mercadopagoController.handleSuccess(req, res);
};

module.exports = {
    createOrderHandler,
    handleSuccessHandler,
};
