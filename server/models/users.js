'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      generateHash: (password) => {
        bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
      validPassword: (password) => {
        bcrypt.compareSync(password, this.password);
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [8, 20],
          msg: "Email address needs to have 8 to 20 characters"
        },
        isEmail: {
          msg: "Enter valid email address"
        }
      }
    },
  },
      {
      classMethods: {
        associate: (models) => {
          Users.hasMany(models.Document, {
            foreignKey: 'userId',
            as: 'Document'
          })
        }
      }
    });
  return Users;
};
