const mock = [
  {
    name: "Fútbol Cancha",
    city: "Buenos Aires",
    price: 10000,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Fútbol" }, { name: "Padel" }],
    id: "1",
  },
  {
    name: "F5 Canchas",
    city: "Buenos Aires",
    price: 15000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Fútbol" }],
    id: "2",
  },
  {
    name: "Canchitas F5",
    city: "Buenos Aires",
    price: 12000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Fútbol" }],
    id: "3",
  },
  {
    name: "Buenos Aires Fútbol",
    city: "Buenos Aires",
    price: 11000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Fútbol" }],
    id: "4",
  },
  {
    name: "Complejo Básquet",
    city: "Buenos Aires",
    price: 13000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Básquet" }],
    id: "5",
  },
  {
    name: "Fútbol por Hora",
    city: "Buenos Aires",
    price: 10000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Fútbol" }],
    id: "6",
  },
  {
    name: "Cancha 2",
    city: "Buenos Aires",
    price: 11500,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Fútbol" }, { name: "Padel" }],
    id: "7",
  },
  {
    name: "Canchas Vóley",
    city: "Buenos Aires",
    pice: 9000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Vóley" }],
    id: "8",
  },
  {
    name: "Fútbol Camp",
    city: "Buenos Aires",
    price: 9000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Fútbol" }],
    id: "9",
  },
  {
    name: "Cancha San Martín",
    city: "Buenos Aires",
    price: 18000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Padel" }],
    id: "10",
  },
  {
    name: "Belgrano Fútbol",
    city: "Buenos Aires",
    price: 19000,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Fútbol" }],
    id: "11",
  },
  {
    name: "Saavedra Básquet",
    city: "Buenos Aires",
    price: 11000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Básquet" }],
    id: "12",
  },
  {
    name: "Mendoza Padel",
    city: "Buenos Aires",
    price: 14000,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Padel" }, { name: "Básquet" }],
    id: "13",
  },
  {
    name: "San Cristóbal",
    city: "Buenos Aires",
    price: 8000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Tenis" }, { name: "Vóley" }],
    id: "14",
  },
  {
    name: "Dorrego Fútbol",
    city: "Buenos Aires",
    price: 9000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Fútbol" }],
    id: "15",
  },
  {
    name: "San Martín",
    city: "Rosario",
    price: 7000,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Tenis" }, { name: "Vóley" }],
    id: "16",
  },
  {
    name: "Quique Fútbol",
    city: "Rosario",
    price: 6000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Fútbol" }],
    id: "17",
  },
  {
    name: "Romario Futebol",
    city: "Rosario",
    price: 17400,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Fútbol" }],
    id: "18",
  },
  {
    name: "Chapu Canchas",
    city: "Rosario",
    price: 14030,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Vóley" }],
    id: "19",
  },
  {
    name: "Blanco Encalada Básquet",
    city: "Rosario",
    price: 4500,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Básquet" }, { name: "Vóley" }],
    id: "20",
  },
  {
    name: "San Lorenzo de Rosario",
    city: "Rosario",
    price: 13000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Básquet" }, { name: "Vóley" }],
    id: "21",
  },
  {
    name: "Constitución",
    city: "Rosario",
    price: 10000,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Vóley" }, { name: "Padel" }],
    id: "22",
  },
  {
    name: "Messi F5",
    city: "Rosario",
    price: 10000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Fútbol" }],
    id: "23",
  },
  {
    name: "Di María F5",
    city: "Rosario",
    price: 11000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Fútbol" }],
    id: "24",
  },
  {
    name: "Vóley Rosario",
    city: "Rosario",
    price: 9000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Vóley" }],
    id: "25",
  },
  {
    name: "Rosario Sur",
    city: "Rosario",
    price: 6000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Padel" }, { name: "Vóley" }],
    id: "25",
  },
  {
    name: "Rosario Norte",
    city: "Rosario",
    pice: 8900,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Tenis" }, { name: "Básquet" }],
    id: "26",
  },
  {
    name: "F5 Ahora",
    city: "Rosario",
    price: 10000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Fútbol" }],
    id: "27",
  },
  {
    name: "Talleres de Córdoba",
    city: "Córdoba",
    pice: 9200,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Fútbol" }, { name: "Básquet" }],
    id: "28",
  },
  {
    name: "Guemes Padel",
    city: "Córdoba",
    price: 8000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Padel" }],
    id: "29",
  },
  {
    name: "San Girona",
    city: "Córdoba",
    price: 13000,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Padel" }, { name: "Básquet" }],
    id: "30",
  },
  {
    name: "Solís Fútbol",
    city: "Córdoba",
    pice: 11100,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Fútbol" }],
    id: "31",
  },
  {
    name: "Pueyrredón Básquet",
    city: "Córdoba",
    price: 13000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Básquet" }],
    id: "32",
  },
  {
    name: "Chacabuco Fútbol",
    city: "Córdoba",
    price: 14000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Fútbol" }, { name: "Básquet" }],
    id: "33",
  },
  {
    name: "Federico Lacroze",
    city: "Córdoba",
    price: 9000,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Tenis" }, { name: "Fútbol" }],
    id: "34",
  },
  {
    name: "Sol de Mayo",
    city: "Córdoba",
    price: 16000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Básquet" }, { name: "Fútbol" }, { name: "Tenis" }],
    id: "35",
  },
  {
    name: "Club Parque",
    city: "Córdoba",
    price: 11000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Vóley" }, { name: "Fútbol" }, { name: "Tenis" }],
    id: "36",
  },
  {
    name: "Cullen Padel",
    city: "Córdoba",
    price: 9000,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Padel" }, { name: "Fútbol" }],
    id: "37",
  },
  {
    name: "Crespo Fútbol",
    city: "Córdoba",
    price: 4300,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Fútbol" }],
    id: "38",
  },
  {
    name: "Lo de Pepe Fútbol",
    city: "Córdoba",
    price: 8000,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Fútbol" }],
    id: "39",
  },
  {
    name: "Cancha 3",
    city: "Córdoba",
    price: 11600,
    image:
      "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
    Sports: [{ name: "Tenis" }, { name: "Fútbol" }],
    id: "40",
  },
  {
    name: "Vóley Pueyrredón",
    city: "Córdoba",
    price: 6000,
    image:
      "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
    Sports: [{ name: "Vóley" }],
    id: "41",
  },
  {
    name: "Silvera Fútbol",
    city: "Córdoba",
    price: 4600,
    image:
      "https://media.tycsports.com/files/2020/06/29/105088/futbol-5_416x234.jpg?v=2",
    Sports: [{ name: "Fútbol" }],
    id: "42",
  },
];

module.exports = mock;
