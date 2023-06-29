const createPackage = async (req, res) => {
  const {
    title,
    titleDesc,
    description,
    days,
    costPerDay,
    recommendation,
    img,
    bestSeason,
    maxElevation,
    accomodation,
  } = req.body;
};

module.exports = { createPackage };
