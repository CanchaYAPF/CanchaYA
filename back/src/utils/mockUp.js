const mock = [
  {
    name: "Cancha San Martín",
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    service: ["Estacionamiento", "Duchas"],
    address: "Av Santa Fe 3253",
    city: "Buenos Aires",
    phone: "1125452356",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 18000,
    Sports: [{ name: "Básquet" }, { name: "Fútbol" }],
    status: true,
  },
  {
    name: "Belgrano Fútbol",
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    service: ["Kiosco", "Duchas"],
    address: "Av Belgrano Norte 388",
    city: "Buenos Aires",
    phone: "1116548478",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 19000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
];
module.exports = mock;
