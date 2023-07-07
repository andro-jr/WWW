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
    includeInFeatured,
  } = req.body;

  // packages.create({});
};

// edit

// re.body = package id , {title,
// package id, DELETE
// show featured ==> {}

module.exports = { createPackage };
