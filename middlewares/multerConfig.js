const multer = require('multer')

const uploadTempFiles = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    cb(null, true)
  },
  limits: { fileSize: 5 * 1024 * 1024 },
})

module.exports = {
  uploadTempFiles,
}
