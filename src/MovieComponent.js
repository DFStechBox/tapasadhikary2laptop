import { movies } from './data/movies.js'

const MovieComponent = () => {

  return (
    <div className="container">
      <h2> Movies</h2>
      <ul className="movie-list">
        {
          movies.map((movie) => (
            <li className="movie" key={movie.id}>
              <img src={movie.poster} alt={movie.title} />
              <p>{movie.title}</p> 
              <p>by {movie.director} was released in {movie.year}</p>
              <p>Ratings: {movie.rating}</p>
            </li>
            
          ))
          
        }
      </ul>
    </div>
  )
};

export default MovieComponent;