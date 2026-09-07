import "../css/favorites.css";
import MovieCard from "../components/MovieCard";
import { usemovieContext } from "../contexts/MovieContext";

function Favorites() {
  const { favoriteMovies } = usemovieContext();

  if (favoriteMovies.length === 0) {
    return (
      <div className="favorites-empty">
        <h1>No favorite movies yet</h1>
        <p>Start adding some to your list!</p>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <p className="favorites-kicker">Your collection</p>
        <h1>Favorite movies</h1>
        <p>
          {favoriteMovies.length} movie
          {favoriteMovies.length === 1 ? "" : "s"} saved
        </p>
      </div>
      <div className="movie-grid">
        {favoriteMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
