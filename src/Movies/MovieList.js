import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({  movies, onMovieCardClick}) => {
  return (
    <div className="movie-list" >
      {movies.map(movie => (
        <MovieCard key={movie.title} movie={movie}
        onClick = {() => onMovieCardClick(movie)}
        />
      ))}
    </div>
  );
};

export default MovieList;