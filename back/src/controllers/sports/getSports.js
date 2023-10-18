const { Sport } = require("../../db");

const getAllSports = async () => {
  const sports = ["Fútbol", "Básquet", "Padel", "Tenis", "Vóley"];
  sports.forEach((s) => {
    if (s) {
      Sport.findOrCreate({
        where: { name: s },
      });
    }
  });

  const deportes = Sport.findAll();

  return deportes;
};

module.exports = getAllSports;
