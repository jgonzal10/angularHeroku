const express = require('express')
const { moviecontroller } = require('../controllers')
const router = express.Router()

router.get('/', (req,res) => res.send('Movies Web APP'))
router.get('/movies', moviecontroller.getListOfMovies)
router.get('/moviedetails', moviecontroller.getMovieDetails)
router.get('/search', moviecontroller.search)

module.exports = router