const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  const PasswordResetToken = sequelize.define(
    ' PasswordResetToken',
    {
      token: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING(100),
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

  PasswordResetToken.prototype.compareOTP = async function (otp) {
    const result = await bcrypt.compare(otp, this.token);
    return result;
  };

  return PasswordResetToken;
};


