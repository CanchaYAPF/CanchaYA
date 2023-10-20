const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorito",
    {
      idUser: {
        type: DataTypes.UUID,
        
      },
      idsFields: {
        type: DataTypes.TEXT,
   
      },
      
    },
    { timestamps: false }
  );
};
