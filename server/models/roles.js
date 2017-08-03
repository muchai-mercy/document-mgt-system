'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
      classMethods: {
        associate: (models) => {
          Roles.hasMany(models.Users, {
            foreignKey: 'role',
            as: 'users'
          });
        }
      }
    });
  return Roles;
};
