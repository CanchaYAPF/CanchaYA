const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Booking",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      day: {
        type: DataTypes.DATEONLY,
      },
      initialHour: {
        type: DataTypes.TIME,
      },
      finalHour: {
        type: DataTypes.TIME,
      },
      totalTime: {
        type: DataTypes.INTEGER,
      },
      status: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    { timestamps: false }
  );
};
