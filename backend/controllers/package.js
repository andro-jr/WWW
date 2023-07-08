const db = require('../db/index');
const { sendError } = require('../utils/mail');
const packages = db.packages;

// @desc Create new Package
// @route /api/package/create
// @access PRIVATE
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

  const packageExists = await packages.findOne({ where: { title } });
  if (packageExists) return sendError(res, 'Package with same name Exists');

  const createdPackage = await packages.create({
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
  });

  res.json({
    message: 'Package Created Successfulyy',
  });
};

// @desc Update Package
// @route /api/package/update-package/:id
// @access PRIVATE
const updatePackage = async (req, res) => {
  const { id } = req.params;
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

  console.log(id, title, titleDesc, bestSeason);

  const package = await packages.findByPk(id);
  if (!package) return sendError(res, 'Package not Found', 404);

  package.title = title || package.title;
  package.titleDesc = titleDesc || package.titleDesc;
  package.description = description || package.description;
  package.days = days || package.days;
  package.costPerDay = costPerDay || package.costPerDay;
  package.recommendation = recommendation || package.recommendation;
  package.bestSeason = bestSeason || package.bestSeason;
  package.maxElevation = maxElevation || package.maxElevation;
  package.accomodation = accomodation || package.accomodation;
  package.includeInFeatured = includeInFeatured || package.includeInFeatured;

  const saved = await package.save();

  if (!saved) return sendError(res, 'Failed to update');

  res.send({ message: 'Update Successful', package });
};

// @desc Delete Package
// @route /api/package/delete-package/:id
// @access PRIVATE
const deletePackage = async (req, res) => {
  const { id } = req.params;

  const package = await packages.findByPk(id);

  if (!package) return sendError(res, 'Package not Found', 404);

  const deleted = packages.destroy({ where: { id } });

  if (!deleted) return sendError(res, 'Failed to delete');

  res.json({ message: 'Package Deleted Successfully' });
};

module.exports = { createPackage, updatePackage, deletePackage };
