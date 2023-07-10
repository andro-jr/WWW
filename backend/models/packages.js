module.exports = (sequelize, DataTypes) => {
  const Packages = sequelize.define('Packages', {
    id: {
      type: DataTypes.INTEGER(100),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    // featuredImage: {},
    titleDesc: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    days: {
      type: DataTypes.INTEGER(100),
      allowNull: true,
    },
    featuredImg: {
      type: DataTypes.STRING(5000),
      allowNull: true,
    },
    costPerDay: {
      type: DataTypes.INTEGER(50),
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER(50),
      defaultValue: 5,
    },
    maxElevation: {
      type: DataTypes.INTEGER(50),
    },
    bestSeason: {
      type: DataTypes.STRING(100),
    },
    accomodation: {
      type: DataTypes.STRING(100),
    },
    includeInFeatured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    recommended: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Packages;
};
