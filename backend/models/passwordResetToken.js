const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const PasswordResetToken = sequelize.define(
    'PasswordResetToken',
    {
      token: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER(100),
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: async (PasswordToken) => {
          if (PasswordToken.token) {
            const hashedToken = await bcrypt.hash(PasswordToken.token, 10);
            PasswordToken.token = hashedToken;
          }
        },
        beforeUpdate: async (PasswordToken) => {
          if (PasswordToken.token) {
            const hashedToken = await bcrypt.hash(PasswordToken.token, 10);
            PasswordToken.token = hashedToken;
          }
        },
      },
    }
  );

  PasswordResetToken.prototype.compareToken = async function (token) {
    const result = await bcrypt.compare(token, this.token);
    return result;
  };

  return PasswordResetToken;
};
