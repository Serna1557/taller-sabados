'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Huespedes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Huespedes.init({
    idhuesped: DataTypes.INTEGER,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    correo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    pais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Huespedes',
  });
  return Huespedes;
};