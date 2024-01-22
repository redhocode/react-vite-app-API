// api.js
import axios from "axios";

const baseUrl = import.meta.env.REACT_APP_BASEURL;
const apiKey = import.meta.env.REACT_APP_APIKEY;

console.log(apiKey, baseUrl)
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDhlM2FjMDJiMmZlNWQwOWM1ODBjZWQwNzIxYWQ1NyIsInN1YiI6IjY1YWI5MjM2ODUwOTBmMDBhMDdkZGUzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.przh_kBFwHP8GCgXbSX4OivAnMrcKOL7CzTSCYIbyYg'
  }
};

export const getMovieList = async () => {
  try {
    const response = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`, options);

    if (response.status === 200) {
      return response.data.results;
    } else {
      throw new Error(`Error fetching movie list. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?&query=${q}&page=1&api_key=${apiKey}`, options);
  return search.data

}
