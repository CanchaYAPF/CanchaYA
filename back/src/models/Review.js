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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rate: {
        type: DataTypes.INTEGER,
        validate: {
          len: {
            arg: [0, 5],
          },
        },
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
