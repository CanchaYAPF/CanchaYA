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
    Sports: [{ name: "Básquet" }],
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
  {
    name: "Saavedra Básquet",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Kiosco"],
    address: "Buenos Aires 353",
    city: "Buenos Aires",
    phone: "1148219199",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 11000,
    Sports: [{ name: "Básquet" }],
    status: true,
  },
  {
    name: "Canchas Vóley",
    image:
      "https://i2.wp.com/lacalleclub.com/wp-content/uploads/2018/11/alquiler-cancha-futbol-la-calle-proximamente-2.jpg?fit=1500%2C750&ssl=1",
    service: ["Kiosco"],
    address: "Av José Ignacio de la Roza Oeste 1946",
    city: "Santa Fe",
    phone: "1144834219",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde", "Noche"],
    pice: 9000,
    Sports: [{ name: "Vóley" }],
    status: true,
  },
  {
    name: "Fútbol Camp",
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/44/42/58/53/1200x1200/1690439478.jpg",
    service: ["Estacionamiento", "Duchas", "Kiosco"],
    address: "Arenales 3648",
    city: "Buenos Aires",
    phone: "1122148243",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 9000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Mendoza Padel",
    image:
      "https://infodeportes.com.ar/wp-content/uploads/2023/03/Furor-por-los-alquileres-de-canchas-de-futbol.-Cuesta-conseguir-turnos12.jpg",
    service: ["Tribunas", "Vestuarios"],
    address: "Av Rioja Norte 304",
    city: "San Miguel de Tucumán",
    phone: "1134474210",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 14000,
    Sports: [{ name: "Padel" }],
    status: true,
  },
  {
    name: "San Cristóbal",
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    service: ["Tribunas", "Vestuarios"],
    address: "De la Ermita 3462",
    city: "Buenos Aires",
    phone: "1111448342",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde", "Noche"],
    price: 8000,
    Sports: [{ name: "Tenis" }],
    status: true,
  },
  {
    name: "Dorrego Fútbol",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Kiosco", "Vestuarios"],
    address: "Paysandú 99",
    city: "Buenos Aires",
    phone: "1137554228",
    paymentMethod: ["MercadoPago"],
    shift: ["Noche"],
    price: 9000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "San Martín",
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    service: ["Kiosco", "Vestuarios"],
    address: "Alvarado 950",
    city: "Rosario",
    phone: "1111461365",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 7000,
    Sports: [{ name: "Tenis" }],
    status: true,
  },
  {
    name: "Quique Fútbol",
    image:
      "https://infodeportes.com.ar/wp-content/uploads/2023/03/Furor-por-los-alquileres-de-canchas-de-futbol.-Cuesta-conseguir-turnos12.jpg",
    service: ["Duchas", "Kiosco", "Vestuarios"],
    address: "Pres. Roberto M. Ortiz 1871",
    city: "Rosario",
    phone: "1134248988",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana"],
    price: 6000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Buenos Aires Fútbol",
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/44/42/58/53/1200x1200/1690439478.jpg",
    service: ["Estacionamiento", "Kiosco"],
    address: "General Güemes 118",
    city: "Buenos Aires",
    phone: "1122345113",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 11000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Complejo Básquet",
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    service: ["Estacionamiento", "Kiosco"],
    address: "La Rioja 455",
    city: "Buenos Aires",
    phone: "1134142623",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 13000,
    Sports: [{ name: "Básquet" }],
    status: true,
  },
  {
    name: "Fútbol Total",
    image:
      "https://muchosnegociosrentables.com/wp-content/uploads/2015/08/campo-de-f%C3%BAtbol-5-o-7.jpg",
    service: ["Estacionamiento", "Kiosco"],
    address: "Santa Rosa 826",
    city: "Buenos Aires",
    phone: "1137224367",
    paymentMethod: ["MercadoPago"],
    shift: ["Noche"],
    price: 10000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "F5 Canchas",
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    service: ["Estacionamiento", "Kiosco"],
    address: "Av Santa Fe 4000",
    city: "Buenos Aires",
    phone: "1129145585",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 15000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Canchitas F8",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Duchas", "Kiosco"],
    address: "25 de Mayo 147",
    city: "Buenos Aires",
    phone: "1134914962",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 12000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Fútbol por Hora",
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/44/42/58/53/1200x1200/1690439478.jpg",
    service: ["Duchas", "Kiosco"],
    address: "Mariano Fragueiro 2020",
    city: "Buenos Aires",
    phone: "1122142580",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 10000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Cancha Mágica",
    image:
      "https://i2.wp.com/lacalleclub.com/wp-content/uploads/2018/11/alquiler-cancha-futbol-la-calle-proximamente-2.jpg?fit=1500%2C750&ssl=1",
    service: ["Vestuarios", "Kiosco"],
    address: "Av Zanon Eguia",
    city: "Buenos Aires",
    phone: "1123624302",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 11500,
    Sports: [{ name: "Padel" }],
    status: true,
  },
  {
    name: "Romario Futebol",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Vestuarios", "Kiosco"],
    address: "Av Belgrano (S) 979",
    city: "Rosario",
    phone: "1114585545",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde", "Noche"],
    price: 17400,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Chapu Canchas",
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    service: ["Kiosco"],
    address: "Av General Las Heras 558",
    city: "Rosario",
    phone: "1153447174",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde", "Noche"],
    price: 14030,
    Sports: [{ name: "Vóley" }],
    status: true,
  },
  {
    name: "Blanco Encalada Básquet",
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    service: ["Kiosco"],
    address: "Av 24 de Septiembre 893",
    city: "Rosario",
    phone: "1190142133",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde", "Noche"],
    price: 4500,
    Sports: [{ name: "Básquet" }],
    status: true,
  },
  {
    name: "San Lorenzo de Rosario",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Kiosco"],
    address: "Av Entre Ríos 2139",
    city: "Rosario",
    phone: "1114921112",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 13000,
    Sports: [{ name: "Vóley" }],
    status: true,
  },
  {
    name: "Constitución",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pfhKhLFIolfVwVPzlKHgp1k2UOzON_tE6A&usqp=CAU",
    service: ["Estacionamiento"],
    address: "Maitén 7869",
    city: "Rosario",
    phone: "1154225523",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 10000,
    Sports: [{ name: "Padel" }],
    status: true,
  },
  {
    name: "Messi D10S",
    image:
      "https://i2.wp.com/lacalleclub.com/wp-content/uploads/2018/11/alquiler-cancha-futbol-la-calle-proximamente-2.jpg?fit=1500%2C750&ssl=1",
    service: ["Estacionamiento"],
    address: "	Av Pres. Figueroa Alcorta 6402",
    city: "Rosario",
    phone: "1138334252",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 10000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Di María Fútbol",
    image:
      "https://muchosnegociosrentables.com/wp-content/uploads/2015/08/campo-de-f%C3%BAtbol-5-o-7.jpg",
    service: ["Estacionamiento"],
    address: "Av Rafael Núñez 4684",
    city: "Rosario",
    phone: "1145422552",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 11000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Vóley Rosario",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Estacionamiento"],
    address: "9 de Julio",
    city: "Rosario",
    phone: "1111474565",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 9000,
    Sports: [{ name: "Vóley" }],
    status: true,
  },
  {
    name: "Rosario Sur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pfhKhLFIolfVwVPzlKHgp1k2UOzON_tE6A&usqp=CAU",
    service: ["Tribunas"],
    address: "Dique I Puerto Santa Fe",
    city: "Rosario",
    phone: "1142249052",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde", "Noche"],
    price: 6000,
    Sports: [{ name: "Padel" }],
    status: true,
  },
  {
    name: "Rosario Norte",
    image:
      "https://i2.wp.com/lacalleclub.com/wp-content/uploads/2018/11/alquiler-cancha-futbol-la-calle-proximamente-2.jpg?fit=1500%2C750&ssl=1",
    service: ["Vestuarios"],
    address: "Av Concepción Arenal",
    city: "Rosario",
    phone: "1154212006",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    pice: 8900,
    Sports: [{ name: "Básquet" }],
    status: true,
  },
  {
    name: "F5 Ahora",
    image:
      "https://muchosnegociosrentables.com/wp-content/uploads/2015/08/campo-de-f%C3%BAtbol-5-o-7.jpg",
    service: ["Duchas"],
    address: "Av Duarte Quirós 69",
    city: "Rosario",
    phone: "1174262114",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 10000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Talleres de Córdoba",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDc0iMRXbcqGBgO94oPh8EM0DQmF9-h7smw&usqp=CAU",
    service: ["Kiosco", "Estacionamiento", "Tribunas", "Vestuarios"],
    address: "Av San Pedrito 1450",
    city: "Córdoba",
    phone: "1194776893",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    pice: 9200,
    Sports: [{ name: "Básquet" }],
    status: true,
  },
  {
    name: "Guemes Padel",
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    service: ["Kiosco", "Estacionamiento", "Tribunas", "Vestuarios"],
    address: "Honduras 4141",
    city: "Córdoba",
    phone: "1147281796",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 8000,
    Sports: [{ name: "Padel" }],
    status: true,
  },
  {
    name: "San Girona",
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    service: ["Kiosco", "Estacionamiento", "Duchas", "Vestuarios"],
    address: "Avenida Hipólito Yrigoyen 81",
    city: "Córdoba",
    phone: "1101434546",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde", "Noche"],
    price: 13000,
    Sports: [{ name: "Padel" }],
    status: true,
  },
  {
    name: "Solís Fútbol",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Kiosco", "Estacionamiento", "Duchas", "Vestuarios"],
    address: "Félix San Martín 890",
    city: "Córdoba",
    phone: "1143938068",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde", "Noche"],
    pice: 11100,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Pueyrredón Básquet",
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    service: ["Kiosco", "Estacionamiento", "Duchas", "Vestuarios"],
    address: "Juan Julián Lastra 2400",
    city: "Córdoba",
    phone: "1154495022",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 13000,
    Sports: [{ name: "Básquet" }],
    status: true,
  },
  {
    name: "Chacabuco Fútbol",
    image:
      "https://i2.wp.com/lacalleclub.com/wp-content/uploads/2018/11/alquiler-cancha-futbol-la-calle-proximamente-2.jpg?fit=1500%2C750&ssl=1",
    service: ["Kiosco", "Estacionamiento", "Duchas", "Vestuarios"],
    address: "Obispo Salguero 495",
    city: "Córdoba",
    phone: "1114425135",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 14000,
    Sports: [{ name: "Básquet" }],
    status: true,
  },
  {
    name: "Federico Lacroze",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDc0iMRXbcqGBgO94oPh8EM0DQmF9-h7smw&usqp=CAU",
    service: ["Kiosco"],
    address: "Juncal 1230",
    city: "Córdoba",
    phone: "1142166038",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 9000,
    Sports: [{ name: "Tenis" }],
    status: true,
  },
  {
    name: "Sol de Mayo",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Duchas"],
    address: "Av Del Libertador 2047",
    city: "Córdoba",
    phone: "1114214910",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 16000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Club Parque",
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    service: ["Duchas"],
    address: "Av Rafael Núñez 5019",
    city: "Córdoba",
    phone: "1124372836",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 11000,
    Sports: [{ name: "Vóley" }],
    status: true,
  },
  {
    name: "Cullen Padel",
    image:
      "https://i2.wp.com/lacalleclub.com/wp-content/uploads/2018/11/alquiler-cancha-futbol-la-calle-proximamente-2.jpg?fit=1500%2C750&ssl=1",
    service: ["Duchas"],
    address: "José Aaron Salmún Feijóo 928",
    city: "Córdoba",
    phone: "1183432027",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 9000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Crespo Fútbol",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDc0iMRXbcqGBgO94oPh8EM0DQmF9-h7smw&usqp=CAU",
    service: ["Kiosco", "Duchas", "Vestuarios"],
    address: "Yerbal 2461",
    city: "Córdoba",
    phone: "1114817532",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 4300,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Lo de Pepe Fútbol",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Kiosco", "Duchas", "Vestuarios"],
    address: "Av Segurola 1949",
    city: "Córdoba",
    phone: "1153498481",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 8000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Club Atlético El Molino",
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    service: ["Kiosco", "Duchas", "Vestuarios"],
    address: "25 de Mayo 2740",
    city: "Córdoba",
    phone: "1174843653",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde"],
    price: 11600,
    Sports: [{ name: "Tenis" }],
    status: true,
  },
  {
    name: "Vóley Pueyrredón",
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    service: ["Duchas", "Vestuarios"],
    address: "Av Luis María Campos 1174",
    city: "Córdoba",
    phone: "1114980835",
    paymentMethod: ["MercadoPago"],
    shift: ["Tarde"],
    price: 6000,
    Sports: [{ name: "Vóley" }],
    status: true,
  },
  {
    name: "Silvera Fútbol",
    image:
      "https://muchosnegociosrentables.com/wp-content/uploads/2015/08/campo-de-f%C3%BAtbol-5-o-7.jpg",
    service: ["Duchas", "Vestuarios"],
    address: "Av Corrientes 1343",
    city: "Córdoba",
    phone: "1102432805",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 4600,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Diógenes Fútbol",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Duchas", "Kiosco"],
    address: "Av Dorrego 1543",
    city: "Mendoza",
    phone: "1102666805",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 8000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Jamaica Deportes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDc0iMRXbcqGBgO94oPh8EM0DQmF9-h7smw&usqp=CAU",
    service: ["Tribunas", "Vestuarios"],
    address: "Av Blanco Encalada 1883",
    city: "Tucumán",
    phone: "1145687805",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Noche"],
    price: 12000,
    Sports: [{ name: "Tenis" }],
    status: true,
  },
  {
    name: "Cafiero Polideportivo",
    image:
      "https://i2.wp.com/lacalleclub.com/wp-content/uploads/2018/11/alquiler-cancha-futbol-la-calle-proximamente-2.jpg?fit=1500%2C750&ssl=1",
    service: ["Kiosco", "Vestuarios"],
    address: "Torres 2543",
    city: "Santa Fe",
    phone: "1198745605",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 11000,
    Sports: [{ name: "Básquet" }],
    status: true,
  },
  {
    name: "Polideportivo Figueroa",
    image: "https://futbolnoble.com.ar/wp-content/uploads/2022/03/slide7_o.jpg",
    service: ["Tribunas", "Vestuarios"],
    address: "Malbernat 1968",
    city: "Mar del Plata",
    phone: "1197788605",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 11500,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
  {
    name: "Victoria Deportes",
    image:
      "https://i2.wp.com/lacalleclub.com/wp-content/uploads/2018/11/alquiler-cancha-futbol-la-calle-proximamente-2.jpg?fit=1500%2C750&ssl=1",
    service: ["Tribunas", "Vestuarios", "Kiosco"],
    address: "Ayacucho 123",
    city: "Tucumán",
    phone: "1197783215",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 10500,
    Sports: [{ name: "Vóley" }],
    status: true,
  },
  {
    name: "Santo Tomé",
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    service: ["Tribunas", "Estacionamiento"],
    address: "Casares 45",
    city: "Mar del Plata",
    phone: "1197785215",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde"],
    price: 7000,
    Sports: [{ name: "Tenis" }],
    status: true,
  },
  {
    name: "Canchas Burela",
    image: "https://futbolnoble.com.ar/wp-content/uploads/2022/03/slide7_o.jpg",
    service: ["Tribunas", "Vestuarios", "Estacionamiento", "Duchas"],
    address: "Malaver 6587",
    city: "Mendoza",
    phone: "1191358605",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana"],
    price: 9500,
    Sports: [{ name: "Padel" }],
    status: true,
  },
  {
    name: "Polideportivo de la Estación",
    image:
      "https://i2.wp.com/lacalleclub.com/wp-content/uploads/2018/11/alquiler-cancha-futbol-la-calle-proximamente-2.jpg?fit=1500%2C750&ssl=1",
    service: ["Kiosco", "Vestuarios", "Estacionamiento"],
    address: "Cabildo 1232",
    city: "Tucumán",
    phone: "1197182205",
    paymentMethod: ["MercadoPago"],
    shift: ["Mañana", "Tarde", "Noche"],
    price: 10000,
    Sports: [{ name: "Fútbol" }],
    status: true,
  },
];

module.exports = mock;
