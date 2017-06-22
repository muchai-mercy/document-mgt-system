'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
    {
      classMethods: {
        associate: (models) => {
          Users.hasMany(models.Document, {
            foreignKey: 'userId',
            as: 'documents'
          });
        }
      }
    });
  return Users;
};
