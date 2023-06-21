const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.INTEGER(100),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
          }
        },
        beforeUpdate: async (user) => {
          if (user.password) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
          }
        },
      },
    }
  );

  Users.prototype.testMethod = function () {
    console.log('This is an instance method log');
  };

  return Users;
};
