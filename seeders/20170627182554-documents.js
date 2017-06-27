
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Documents', [{
      title: 'Document 1',
      content: 'test document',
      category: 'Public',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      title: 'Document 2',
      content: 'test document',
      category: 'Public',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    ], {});
  },

  down(queryInterface, Sequelize) {
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkDelete('Documents', null, {});
  }
};
