const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len:{
            arg:[5,15],
            msg:"La contraseña debe de tener entre 5 y 15 caracteres"
          }
        }
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        }
      },
      user_type: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};
