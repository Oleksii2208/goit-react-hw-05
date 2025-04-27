import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
