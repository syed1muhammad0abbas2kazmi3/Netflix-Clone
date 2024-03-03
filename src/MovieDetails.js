import React, { useState, useEffect } from 'react';

import './MovieDetails.css';

const MovieDetails = () => {
  const imdbId = 'tt3896198';
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = 'e2fd6783'; // Your OMDB API key

    fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        return response.json();
      })
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [imdbId]); // Changed from [id] to [imdbId]

  if (!movie) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h1>MovieDetails</h1>
      <h2 className="movie-details__title">{movie.Title}</h2>
      
      <p className="movie-details__overview">{movie.Plot}</p>
      <h3>Year of release</h3>
      <p>{movie.Year}</p>
      <p className="home__movie-rated">Rated: {movie.Rated}</p>
      {/* Add more movie details here */}
    </div>
  );
}

export default MovieDetails;
