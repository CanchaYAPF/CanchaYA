const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('Cancha', {
    id: {
      type: DataTypes.UUID,
      primaryKey : true,
      defaultValue : DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cuentaTransferencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

    mail: {
     type: DataTypes.STRING,
     allowNull: false,
    },

    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
       },

    direccion: {
    type: DataTypes.TEXT,
     allowNull: false,
    },



  },
  {timestamps: false}
  );
};