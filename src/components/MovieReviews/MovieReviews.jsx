import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>
                <strong>Review:</strong> {review.content}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, there is no review for this movie yet!</p>
      )}
    </div>
  );
};

export default MovieReviews;
