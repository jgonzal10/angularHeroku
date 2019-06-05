const axios = require('axios')


/**
 *  Method to call API. It will bring the 20 movies in the specified page number  
 * @param {number} page
 * @return data 
 */
const listMovies = async (page) => {
  try {
    return await axios.get(`${process.env.API_URL}/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`)
  } catch(e) {
    throw new Error(e.message)
  }
}


/**
 * Service to bring move´s details
 * @param {number} movie_id 
 * @return {object} movie
 */
const movieDetails = async (movie_id) => {
  try {
    return await axios.get(`${process.env.API_URL}/movie/${movie_id}?api_key=${process.env.API_KEY}&language=en-US`)
  } catch(e) {
    throw new Error(e.message)
  }
}

/**
 * Function to bring 20 movies that match the page and the query passed as parameter
 * @param {number} page 
 * @param {string} query 
 * @return {array} movies
 */
const movieSearch = async (page,query) => {
  try {
    return await axios.get(`${process.env.API_URL}/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`)
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
    listMovies, movieDetails, movieSearch
}