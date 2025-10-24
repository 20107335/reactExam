import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import WriteReview from "../components/cardIcons/writeReview";

const TopRatedMoviesPage = () => {
  // Fetch top rated movies directly from TMDB
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
  });

 
  if (isLoading) {
    return <Spinner />;
  }

  // Show error message if fetch fails
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Top Rated"
      movies={movies}
      action={(movie) => <WriteReview movie={movie} />}
    />
  );
};

export default TopRatedMoviesPage;
