'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'tests',
      lastName: 'hhhh',
      username: 'test',
      email: 'tests@gmail.com',
      password: '$2a$10$EUGSivMTHd2EPhShm8Wn9.jdfDBTfYJQ8f6B8UjW1wEStSikebRgO',
      role: 'Admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      firstName: 'test',
      lastName: 'tttt',
      username: 'tests',
      email: 'testrun@gmail.com',
      password: 'test',
      role: 'User',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }], {});
  },

  down(queryInterface, Sequelize) {
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.
      return queryInterface.bulkDelete('Users', null, {});
  }
};
