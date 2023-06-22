const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const EmailVerificationToken = sequelize.define(
    'EmailVerificationToken',
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
        beforeCreate: async (emailToken) => {
          if (emailToken.token) {
            const hashedToken = await bcrypt.hash(emailToken.token, 10);
            emailToken.token = hashedToken;
          }
        },
        beforeUpdate: async (emailToken) => {
          if (emailToken.token) {
            const hashedToken = await bcrypt.hash(emailToken.token, 10);
            emailToken.token = hashedToken;
          }
        },
      },
    }
  );

  EmailVerificationToken.prototype.compareOTP = async function (otp) {
    const result = await bcrypt.compare(otp, this.token);
    return result;
  };

  return EmailVerificationToken;
};
