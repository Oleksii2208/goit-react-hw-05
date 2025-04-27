import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzljN2ZlNDJjOWEwYWU4OGFkZmEwNTE1NjgzZDJlMSIsIm5iZiI6MTc0NTAzMjU0OS43ODU5OTk4LCJzdWIiOiI2ODAzMTU2NWUwMzIwN2QwYjFkOTRiNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.s4C80kdFbsk7bkCUzNLyfX7ChiO_gujhCPI9GkWxVAE",
    },
  });
  return response.data;
};

export const fetchMovieSearch = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzljN2ZlNDJjOWEwYWU4OGFkZmEwNTE1NjgzZDJlMSIsIm5iZiI6MTc0NTAzMjU0OS43ODU5OTk4LCJzdWIiOiI2ODAzMTU2NWUwMzIwN2QwYjFkOTRiNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.s4C80kdFbsk7bkCUzNLyfX7ChiO_gujhCPI9GkWxVAE",
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzljN2ZlNDJjOWEwYWU4OGFkZmEwNTE1NjgzZDJlMSIsIm5iZiI6MTc0NTAzMjU0OS43ODU5OTk4LCJzdWIiOiI2ODAzMTU2NWUwMzIwN2QwYjFkOTRiNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.s4C80kdFbsk7bkCUzNLyfX7ChiO_gujhCPI9GkWxVAE",
    },
  });
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzljN2ZlNDJjOWEwYWU4OGFkZmEwNTE1NjgzZDJlMSIsIm5iZiI6MTc0NTAzMjU0OS43ODU5OTk4LCJzdWIiOiI2ODAzMTU2NWUwMzIwN2QwYjFkOTRiNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.s4C80kdFbsk7bkCUzNLyfX7ChiO_gujhCPI9GkWxVAE",
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzljN2ZlNDJjOWEwYWU4OGFkZmEwNTE1NjgzZDJlMSIsIm5iZiI6MTc0NTAzMjU0OS43ODU5OTk4LCJzdWIiOiI2ODAzMTU2NWUwMzIwN2QwYjFkOTRiNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.s4C80kdFbsk7bkCUzNLyfX7ChiO_gujhCPI9GkWxVAE",
    },
  });
  return response.data.results;
};
