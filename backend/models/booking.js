module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: {
      type: DataTypes.INTEGER(100),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    useremail: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    packageId: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    packagename: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    departureDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    payment_intent: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Booking;
};
