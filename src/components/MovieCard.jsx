import "../css/movie-card.css";
import { usemovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addFavoriteMovie, removeFavoriteMovie, isFavoriteMovie } =
    usemovieContext();
  function handleFavoriteClick(e) {
    e.preventDefault();
    if (isFavoriteMovie(movie.id)) {
      removeFavoriteMovie(movie.id);
    } else {
      addFavoriteMovie(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${isFavoriteMovie(movie.id) ? "favorited" : ""}`}
            onClick={handleFavoriteClick}
            aria-label={
              isFavoriteMovie(movie.id)
                ? "Remove from favorites"
                : "Add to favorites"
            }
          >
            {isFavoriteMovie(movie.id) ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <div className="movie-title-row">
          <h3>{movie.title}</h3>
          {movie.release_date && (
            <span className="movie-year">{movie.release_date.slice(0, 4)}</span>
          )}
        </div>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
