
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Documents', [{
      title: 'Document 1',
      content: 'test document',
      category: 'Private',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: 1
    },
    {
      title: 'Document 2',
      content: 'test document',
      category: 'Public',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: 2
    }
    ], {});
  },

  down(queryInterface, Sequelize) {
      // Return a promise to correctly handle asynchronicity.
    return queryInterface.bulkDelete('Documents', null, {});
  }
};
