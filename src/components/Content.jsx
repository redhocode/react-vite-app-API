/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getMovieList, searchMovie } from '../utils/api';
import MovieCard from './MovieCard'; // Adjust the import path accordingly
import '../Content.css';
import SearchResult from './SearchResult';
import NavBar from './NavBar';

const Content = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    getMovieList()
      .then((result) => {
        setPopularMovies(result);
      })
      .catch((error) => {
        console.error("Error fetching movie list:", error);
      });
  }, []);

  const PopularMovieLists = () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {popularMovies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );

  const fetchPopularMovies = async () => {
  try {
    const result = await getMovieList();
    setPopularMovies(result);
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
};

useEffect(() => {
  fetchPopularMovies();
}, []);

// Fungsi untuk menangani pencarian
  const handleSearch = async (query) => {
    try {
      const searchResult = await searchMovie(query);
      setSearchResults(searchResult.results);
    } catch (error) {
      console.error('Error searching movies:', error.message);
    }
  };
  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen'>
           <NavBar onSearch={handleSearch} />
 
    <div className="mt-10 Movie-container">
        {searchResults.length > 0 ? (
          <SearchResult searchResults={searchResults} />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {popularMovies.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
        )}
      </div>
        </div>
    </>
  );
};

export default Content;