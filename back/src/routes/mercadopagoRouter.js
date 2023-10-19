const { Router } = require("express")
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const mercadoPagoRouter = Router()

mercadoPagoRouter.post("/createOrder", (req, res) => {
    mercadopago.configure({
        access_token: ACCESS_TOKEN,
    });
    const { id, title, description, image, stock, condition, price } = req.body;
    let preference = {
        items: [
            {
                id,
                title,
                quantity: 1,
                unit_price: price,
                currency_id: "ARS",
                picture_url: image,
                description,
            },
        ],
        back_urls: {
            success: "http://localhost:3001/payment/success",
            failure: "http://localhost:3001/payment/failure",
            pending: "http://localhost:3001/payment/pending",
        },
        notification_url: "https://c252-181-170-139-159.ngrok-free.app/webhook",
    };
    mercadopago.preferences
        .create(preference)
        .then((response) => res.json(response))
        .catch((error) => {
            message: error.message;
        });
});

mercadoPagoRouter.get("/success", (req, res) => {
    console.log(req.query);
    // res.send("Pago realizado");
    res.redirect("http://localhost:5173/payment/success");
});




module.exports = mercadoPagoRouter;