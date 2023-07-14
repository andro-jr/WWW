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
    recommended,
    bestSeason,
    maxElevation,
    accomodation,
    includeInFeatured,
    price,
  } = req.body;

  let includeInFeaturedBool = false;
  let recommendedBool = false;

  if (includeInFeatured === 'on') {
    includeInFeaturedBool = true;
  }
  if (recommended === 'on') {
    recommendedBool = true;
  }

  console.log(recommendedBool, includeInFeaturedBool);

  let featuredImg;
  if (req.file?.filename) {
    featuredImg = `http://localhost:8000/media/${req.file.filename}`;
  }

  console.log(req.body);

  const packageExists = await packages.findOne({ where: { title } });
  if (packageExists) return sendError(res, 'Package with same name Exists');

  const createdPackage = await packages.create({
    title,
    titleDesc,
    description,
    days,
    costPerDay,
    recommended: recommendedBool,
    featuredImg,
    bestSeason,
    maxElevation,
    accomodation,
    includeInFeatured: includeInFeaturedBool,
    price,
  });

  res.redirect('http://localhost:3001/packages');
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
    recommended,
    bestSeason,
    maxElevation,
    accomodation,
    includeInFeatured,
    price,
  } = req.body;

  let featuredImg;
  if (req.file?.filename) {
    featuredImg = `http://localhost:8000/media/${req.file.filename}`;
  }

  let includeInFeaturedBool = false;
  let recommendedBool = false;

  if (includeInFeatured === 'true') {
    includeInFeaturedBool = true;
  }
  if (recommended === 'true') {
    recommendedBool = true;
  }

  console.log(req.body);

  const package = await packages.findByPk(id);
  if (!package) return sendError(res, 'Package not Found', 404);

  package.title = title || package.title;
  package.titleDesc = titleDesc || package.titleDesc;
  package.description = description || package.description;
  package.days = days || package.days;
  package.costPerDay = costPerDay || package.costPerDay;
  package.recommended = recommendedBool;
  package.bestSeason = bestSeason || package.bestSeason;
  package.maxElevation = maxElevation || package.maxElevation;
  package.accomodation = accomodation || package.accomodation;
  package.includeInFeatured = includeInFeaturedBool;
  package.price = price || package.price;
  package.featuredImg = featuredImg || package.featuredImg;

  const saved = await package.save();

  if (!saved) return sendError(res, 'Failed to update');

  res.redirect('http://localhost:3001/packages');
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

// @desc Get all Packages
// @route /api/package/all
// @access PUBLIC
const getAllPackages = async (req, res) => {
  const allPackages = await packages.findAll();

  if (!allPackages) return sendError(res, 'Failed to get packages');

  res.json(allPackages);
};

const getAllpackageCount = async (req, res) => {
  const allPackages = await packages.findAll();

  if (!allPackages) return sendError(res, 'Failed to get packages');

  res.json(allPackages.length);
};

const getSinglePackage = async (req, res) => {
  const { id } = req.params;

  const package = await packages.findByPk(id);

  if (!package) return sendError(res, 'Failed to get package');

  res.json(package);
};

module.exports = {
  createPackage,
  updatePackage,
  deletePackage,
  getAllPackages,
  getSinglePackage,
  getAllpackageCount,
};
