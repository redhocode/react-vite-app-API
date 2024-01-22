/* eslint-disable react/prop-types */

import { IoIosStar } from "react-icons/io";
const MovieCard = ({ movie }) => (
  <div className="items-center max-w-screen-xl mx-auto overflow-hidden rounded-md shadow-lg bg-teal-50">
    <img
      className="object-cover w-full h-200"
      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      alt={movie.title}
    />
<div className="flex flex-col items-center p-2">
  <h2 className="mb-2 text-xl font-semibold text-gray-600">{movie.title}</h2>
  <p className="text-gray-600">{movie.release_date || "Tidak Tersedia"}</p>
  <div className="flex items-center py-2 md-2">
    <p className="text-gray-600">{movie.vote_average}</p>
    <IoIosStar className="ml-1 text-yellow-600 outline outline-2 outline-offset-2" />
  </div>
</div>


      
    </div>
 
  
    

);

export default MovieCard;
