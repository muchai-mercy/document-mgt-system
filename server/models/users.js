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
  },
    {
      classMethods: {
        associate: (models) => {
          Users.belongsTo(models.Roles, {
            foreignKey: 'role',
            OnDelete: 'CASCADE',
          });
          Users.hasMany(models.Documents, {
            foreignKey: 'userId',
            as: 'documents'
          });
        },
      },
    });
  return Users;
};
