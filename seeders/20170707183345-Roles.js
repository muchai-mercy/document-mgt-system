'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [{
      role: "Admin",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      role: "User",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }], {});
  },

  down(queryInterface, Sequelize) {
    // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
