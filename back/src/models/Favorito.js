const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorito",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        
      },


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
