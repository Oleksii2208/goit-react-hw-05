import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { fetchMovieSearch } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import s from "./MoviesPage.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setLoading(true);
        const results = await fetchMovieSearch(query);
        setMovies(results.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query]);

  const handleSubmit = (value) => {
    if (!value) {
      searchParams.delete("query");
      return setSearchParams(searchParams);
    }
    searchParams.set("query", value);
    setSearchParams(searchParams);
    // setSearchParams({ query: value });

    //
    // setSearchParams(value !== "" ? { query: value } : {});
    // setMovies([]);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}

      {!loading && query && movies.length === 0 && (
        <p>Sorry, no movie was found for your search!</p>
      )}

      {movies.length > 0 && (
        <ul className={s.moviesList}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link state={`/movies?query=${query}`} to={`/movies/${movie.id}`}>
                <img
                  className={s.movieImage}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : defaultImg
                  }
                  width={200}
                  alt={movie.title}
                />
                <p className={s.movieText}>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
