const { Sport } = require("../../db");

const getAllSports = async () => {
  const sportsToExtract = ["Fútbol", "Básquet", "Padel", "Tenis", "Vóley"];
  const extractedSports = [];

  for (const sportName of sportsToExtract) {
    const sport = await Sport.findOne({ where: { name: sportName } });

    if (sport) {
      extractedSports.push(sport);
    }
  }

  return extractedSports;
};

module.exports = getAllSports;
