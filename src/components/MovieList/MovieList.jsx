import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const defaultImg =
  "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={s.moviesList}>
        {movies.map((movie) => (
          <li className={s.movieList} key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              <img
                className={s.movieImage}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title}
                width={200}
              />
              <p className={s.movieText}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
