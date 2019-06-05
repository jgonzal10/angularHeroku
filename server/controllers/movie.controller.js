const {listMovies,movieDetails,movieSearch}= require('../services/movie.service')

/**
 * Method to brill the list of movies
 */
const getListOfMovies = async (req, res, next) => { 
    try {
      let page = req.query.page;
      let data = await listMovies(page)
      let movies = data.data.results;
      res.json(movies)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }

  /**
   * Method to get Movie Details
   */
  const getMovieDetails = async (req, res, next) => {
 
    try {
      let movie_id = req.query.movie_id;
      let data = await movieDetails(movie_id)
      let movie = data.data;
      res.json(movie)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }


    /**
   * Search Function 
   */
  const search = async (req, res, next) => {
 
    try {
      let page = req.query.page;
      let query = req.query.query;
      let data = await movieSearch(page, query)
      let movies = data.data;
      res.json(movies)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }

module.exports ={getListOfMovies, getMovieDetails, search}