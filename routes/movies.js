const express = require('express')
const { verifyAdminToken } = require('../middlewares/verifyToken')
const { uploadTempFiles } = require('../middlewares/multerConfig')
const {
  getAllMovies,
  getMovie,
  createMovie,
  editMovie,
  deleteMovie,
} = require('../controllers/moviesController')
const {
  updateMovieFiles,
  deleteMovieFiles,
} = require('../controllers/movieFilesController')
const router = express.Router()

router.get('/', getAllMovies)
router.get('/:id', getMovie)
router.post('/', verifyAdminToken, createMovie)
router.put('/:id', verifyAdminToken, editMovie)
router.put('/files', verifyAdminToken, uploadTempFiles.any(), updateMovieFiles)
router.put('/files/remove', verifyAdminToken, deleteMovieFiles)
router.delete('/:id', verifyAdminToken, deleteMovie)

module.exports = router
