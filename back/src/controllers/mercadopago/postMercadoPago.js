const mercadopago = require('mercadopago');
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;


// Configure MercadoPago
mercadopago.configure({
    access_token: ACCESS_TOKEN,
});


const createOrder = (req, res) => {

    const { id, title, description, image, price } = req.body;
    const preference = {
        id,
        title,
        quantity: 1,
        unit_price: price,
        currency_id: "ARS",
        picture_url: image,
        description,
    }

    mercadopago.preferences.create(preference)
        .then((response) => res.json(response))
        .catch((error) => res.status(500).json({ error: error.message }));
};

const handleSuccess = (req, res) => {
    console.log(req.query);
    
    res.redirect("http://localhost:5173/payment/success");
};

module.exports = {
    createOrder,
    handleSuccess,
};
