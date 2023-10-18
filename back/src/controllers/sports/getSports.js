const { Sport } = require("../../db");

const getAllSports = async () => {
  const sports = [
    "Fútbol",
    "Básquet",
    "Rugby",
    "Tenis",
    "Vóley",
    "Boxeo",
    "Hockey",
  ];
  sports.forEach(s =>{
    if (s){
        Sport.findOrCreate({
            where: {name : s}
        })
    }
});


const deportes = Sport.findAll()

  return deportes;
};

module.exports = getAllSports;
