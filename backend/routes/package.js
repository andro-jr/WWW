const express = require('express');
const {
  createPackage,
  updatePackage,
  deletePackage,
  getAllPackages,
  getSinglePackage,
  getAllpackageCount,
} = require('../controllers/package');
const { isAdmin, isAuth } = require('../middlewares/auth');
const { uploadImage } = require('../middlewares/imageUpload');

const router = express.Router();

// router.post(
//   '/create',
//   isAuth,
//   isAdmin,
//   uploadImage.single('image'),
//   createPackage
// );
router.post('/create', uploadImage.single('image'), createPackage);
router.post('/update-package/:id', uploadImage.single('image'), updatePackage);
router.delete('/delete-package/:id', deletePackage);

router.get('/all', getAllPackages);
router.get('/package-count', getAllpackageCount);
router.get('/single/:id', getSinglePackage);

module.exports = router;
