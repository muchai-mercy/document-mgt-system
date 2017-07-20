'use strict';

module.exports = (sequelize, DataTypes) => {
  const Documents = sequelize.define('Documents', {
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
      classMethods: {
        associate: (models) => {
          Documents.belongsTo(models.Users, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
          });
        }
      }
    });
  return Documents;
};
