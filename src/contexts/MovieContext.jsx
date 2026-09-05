import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const usemovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const storagedFavorites = localStorage.getItem("favoriteMovies");

    if (storagedFavorites) {
      setFavoriteMovies(JSON.parse(storagedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const addFavoriteMovie = (movie) => {
    setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavoriteMovie = (movieId) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId),
    );
  };

  const isFavoriteMovie = (movieId) => {
    return favoriteMovies.some((movie) => movie.id === movieId);
  };

  const value = {
    favoriteMovies,
    addFavoriteMovie,
    removeFavoriteMovie,
    isFavoriteMovie,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
