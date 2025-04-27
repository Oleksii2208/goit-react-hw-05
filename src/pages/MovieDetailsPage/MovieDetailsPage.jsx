import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "../../services/api";
import Loader from "../../components/Loader/Loader";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  if (!movie) return <Loader />;

  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <Link to={goBackRef.current}>Go back movies</Link>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        width={500}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres?.map((genre) => genre.name).join(", ")}</p>
      <h2>Additional information</h2>
      <nav>
        <NavLink className={setActiveClass} to="cast">
          Cast
        </NavLink>
        <NavLink className={setActiveClass} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
