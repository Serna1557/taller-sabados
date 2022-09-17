'use strict';

const { SequelizeScopeError } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idreservas: {
        type: Sequelize.INTEGER
      },
      inicio_fecha: {
        type: Sequelize.DATE
      },
      fin_fecha: {
        type: Sequelize.DATE
      },
      habitacion: {
        type: Sequelize.STRING
      },
      huesped: {
        type: Sequelize.STRING
      },
      idhabitaciones:{
        type:Sequelize.INTEGER,
        references:{
          model:{
            tableName:'habitaciones',
          },
          key:'id'
        },
        allowNull:false
      },
      idhuesped:{
        type:Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Huespedes',
          },
          key:'id'
        },
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};