const mercadopago = require("mercadopago");
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

mercadopago.configure({
    access_token: ACCESS_TOKEN,
});

const createOrder = (req, res) => {
    const { id, title, description, image, price } = req.body;
    const paymentData = req.body.paymentData; 
console.log(paymentData);
    const items = [
        {
            id,
            title,
            quantity: 1,
            unit_price: price,
            currency_id: "ARS",
            picture_url: image,
            description,
            day: paymentData.day,
            initialHour: paymentData.initialHour,
            finalHour: paymentData.finalHour,
            totalTime: paymentData.totalTime,
            fieldName: paymentData.fieldName,
            userId: paymentData.userId,
        }
    ];

    const preference = {
        items,
    };
    mercadopago.preferences
        .create(preference)
        .then((response) => res.json(response))
        .catch((error) => res.status(500).json({ error: error.message }));
};

const handleSuccess = (req, res) => {
    console.log(req.query);

    res.redirect(`http://localhost:5173/2`);
};

module.exports = {
    createOrder,
    handleSuccess,
};
