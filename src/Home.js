import React, { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = 'e2fd6783'; // Your OMDB API key
    const imdbId = 'tt3896198'; // IMDB ID of the movie you want to fetch

    fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        // Check if data.Response is "True" (indicating success)
        if (data.Response === "True") {
          // If successful, set the movie data to state
          setMovies([data]);
        } else {
          // If not successful, log the error message
          console.error('Error fetching movie data:', data.Error);
        }
      })
      .catch(error => {
        // Handle any network errors
        console.error('Error fetching movie data:', error);
      });
  }, []);

  return (
    <div className="home">
      <h1 className="home__title">Popular Movies</h1>
      <div className="home__movies">
        {movies.map(movie => (
          <div key={movie.imdbID} className="home__movie">
            <img className="home__movie-poster" src={movie.Poster} alt={movie.Title} />
            <div className="home__movie-details">
              <h2 className="home__movie-title">{movie.Title}</h2>
              <p className="home__movie-year">Year: {movie.Year}</p>
              <p className="home__movie-rated">Rated: {movie.Rated}</p>
              <p className="home__movie-plot">{movie.Plot}</p>
              {/* Add more movie details here */}
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default Home;
