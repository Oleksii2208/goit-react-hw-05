import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                width={100}
              />
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, there is no cast list for this movie!</p>
      )}
    </div>
  );
};

export default MovieCast;
