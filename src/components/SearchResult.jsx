/* eslint-disable react/prop-types */
// SearchResult.jsx
import MovieCard from './MovieCard';

const SearchResult = ({ searchResults }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {searchResults.map((movie, i) => (
      <MovieCard key={i} movie={movie} />
    ))}
  </div>
);

export default SearchResult;
