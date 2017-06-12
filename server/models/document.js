'use strict';

module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      // allowNull: false
    }
  }, {
    classMethods: {
      associate:(models) => {
        Document.belongsTo(models.Users, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Document;
};
