const express = require('express');
const {
  createPackage,
  updatePackage,
  deletePackage,
} = require('../controllers/package');

const router = express.Router();

router.post('/create', createPackage);
router.put('/update-package/:id', updatePackage);
router.delete('/delete-package/:id', deletePackage);

module.exports = router;
