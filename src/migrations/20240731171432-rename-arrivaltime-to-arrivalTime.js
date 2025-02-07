'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Flights', 'arrivaltime', 'arrivalTime');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Flights', 'arrivalTime', 'arrivaltime');
  }
};
