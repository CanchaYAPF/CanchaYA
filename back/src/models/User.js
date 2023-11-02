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
            arg:[6,20],
            msg:"La contraseña debe de tener entre 6 y 20 caracteres"
          }
        }
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate: {
          isEmail: true,
        }
      },
      birthdate:{
        type: DataTypes.DATEONLY,
        allowNull:true,
      },
      phone:{
        type: DataTypes.STRING,
        allowNull:true
      },
      roles: {
        type: DataTypes.STRING,
        defaultValue: "regular"
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    { timestamps: false }
  );
};
