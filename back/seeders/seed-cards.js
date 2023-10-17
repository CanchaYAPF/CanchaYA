const Card = require();

const cardData = [
  { name: 'Card 1' },
  { name: 'Card 2' },
  { name: 'Card 3' },
  { name: 'Card 4' },
  { name: 'Card 5' },
  { name: 'Card 6' },
  { name: 'Card 7' },
  { name: 'Card 8' },
  { name: 'Card 9' },
  { name: 'Card 10' },
  { name: 'Card 11' },
  { name: 'Card 12' },
  { name: 'Card 13' },
  { name: 'Card 14' },
  { name: 'Card 15' },
  { name: 'Card 16' },
];

async function seedCards() {
  try {
    await Card.bulkCreate(cardData);
    console.log('Datos de las cards insertados con éxito.');
  } catch (error) {
    console.error('Error al insertar datos de las cards:', error);
  }
}

seedCards();
