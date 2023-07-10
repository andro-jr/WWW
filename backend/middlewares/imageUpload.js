const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './media',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploadImage = multer({ storage: storage });

module.exports = { uploadImage };
