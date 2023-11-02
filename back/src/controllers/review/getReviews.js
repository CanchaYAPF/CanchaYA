const { Review, User } = require("../../db");

const getReviews = async (id) => {
  try {
    const allReviews = await Review.findAll({
      where: { FieldId: id },
      include: [
        {
          model: User, // Indica la tabla de usuarios
          attributes: ['name'], // Selecciona los campos que deseas obtener
        },
      ],
    });

    return allReviews;
  } catch (error) {
    console.error("Error al buscar reseñas:", error);
    return null;
  }
};

module.exports = getReviews;

