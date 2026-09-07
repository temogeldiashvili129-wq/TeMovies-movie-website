import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const usemovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    try {
      const storedFavorites = localStorage.getItem("favoriteMovies");
      const parsedFavorites = storedFavorites
        ? JSON.parse(storedFavorites)
        : [];
      return Array.isArray(parsedFavorites) ? parsedFavorites : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const addFavoriteMovie = (movie) => {
    setFavoriteMovies((prevFavorites) => {
      if (prevFavorites.some((favorite) => favorite.id === movie.id)) {
        return prevFavorites;
      }

      return [...prevFavorites, movie];
    });
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
