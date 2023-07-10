const express = require('express');
const {
  createPackage,
  updatePackage,
  deletePackage,
  getAllPackages,
} = require('../controllers/package');
const { isAdmin, isAuth } = require('../middlewares/auth');
const { uploadImage } = require('../middlewares/imageUpload');

const router = express.Router();

router.post(
  '/create',
  isAuth,
  isAdmin,
  uploadImage.single('image'),
  createPackage
);
router.put('/update-package/:id', updatePackage);
router.delete('/delete-package/:id', deletePackage);

router.get('/all', getAllPackages);

module.exports = router;
