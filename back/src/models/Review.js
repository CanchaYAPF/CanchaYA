const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      rate: {
        type: DataTypes.INTEGER,
        validate: {
          len: {
            arg: [1, 5],
          },
        },
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      approved:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
      }
    },
    { timestamps: false }
  );
};
