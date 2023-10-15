const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Field",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
   
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      service: {
        type: DataTypes.ARRAY(DataTypes.STRING),
 
      },
      address: {
        type: DataTypes.STRING,
  
      },
      city: {
        type: DataTypes.TEXT,
   
      },
      phone:{
        type: DataTypes.STRING,
      },
      price:{
        type: DataTypes.INTEGER,
      },
      paymentMethod:{
        type:DataTypes.ARRAY(DataTypes.STRING)
      },
      shift:{
        type:DataTypes.ARRAY(DataTypes.STRING)
      }

    },
    { timestamps: false }
  );
};
