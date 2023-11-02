const mercadopago = require("mercadopago");
const sgMail = require("@sendgrid/mail");
const { User } = require("../../db");
require("dotenv").config();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const createOrder = (req, res) => {
  const { id, title, description, image, price, userId, bookingId } = req.body;
  console.log("asdasdasd", bookingId);
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
        userId,
      },
    ],
    external_reference: bookingId,
    back_urls: {
      success: "https://cancha-ya-git-prepredevelop-dupli-dupli-canchayas-projects.vercel.app/home",
      failure: "https://canchasyaback.onrender.com/payment/failure",
      pending: "https://canchasyaback.onrender.com/payment/pending",
    },
    notification_url: "https://c252-181-170-139-159.ngrok-free.app/webhook",
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => res.json(response))
    .catch((error) => {
      message: error.message;
    });
};

const handleSuccess = async (req, res) => {
  console.log(req.query);

  const userId = req.user.id;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      const userEmail = user.mail;

      const msg = {
        to: userEmail,
        from: "grtechpf@gmail.com",
        subject: "Reserva exitosa",
        text: "Tu reserva ha sido exitosa. Gracias por elegirnos!.",
      };

      sgMail
        .send(msg)
        .then(() => {
          console.log("Correo electrónico enviado con éxito");
          res.redirect(`https://cancha-ya-git-prepredevelop-dupli-dupli-canchayas-projects.vercel.app/home`);
        })
        .catch((error) => {
          console.error("Error al enviar el correo electrónico", error);
          res.redirect(`https://cancha-ya-git-prepredevelop-dupli-dupli-canchayas-projects.vercel.app/home`);
        });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al consultar la base de datos", error);
    res.status(500).json({ error: "Error al consultar la base de datos" });
  }
};

module.exports = {
  createOrder,
  handleSuccess,
};
