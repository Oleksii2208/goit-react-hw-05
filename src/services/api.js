import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzljN2ZlNDJjOWEwYWU4OGFkZmEwNTE1NjgzZDJlMSIsIm5iZiI6MTc0NTAzMjU0OS43ODU5OTk4LCJzdWIiOiI2ODAzMTU2NWUwMzIwN2QwYjFkOTRiNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.s4C80kdFbsk7bkCUzNLyfX7ChiO_gujhCPI9GkWxVAE",
    },
  });
  return response.data;
};

export default fetchTrendingMovies;

// import axios from "axios";

// const API_KEY = "D5fl4sDm_5iMf3NxAIbT3gy6Djb934SGAoQ-s5t4h1Q";
// axios.defaults.baseURL = "https://api.unsplash.com/";

// const fetchImages = async (query, page) => {
//   const response = await axios.get("/search/photos", {
//     params: {
//       query,
//       per_page: 12,
//       page: page,
//       client_id: API_KEY,
//     },
//     // signal: signal,
//   });

//   return response.data;
// };

// export default fetchImages;
