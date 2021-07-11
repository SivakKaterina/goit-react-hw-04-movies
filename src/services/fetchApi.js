import axios from "axios";

async function getTrendingFilms() {
  const resp = await axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/week?api_key=5a4c89ffe5846030bcf4fa2ac8aedb51",
  });
  return resp;
}

function getFilmById(id) {
  return axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=5a4c89ffe5846030bcf4fa2ac8aedb51`,
  });
}

function getFilmsByQuery(query) {
  return axios({
    method: "GET",
    url:
      "https://api.themoviedb.org/3/search/movie?api_key=5a4c89ffe5846030bcf4fa2ac8aedb51&query=" +
      query,
  });
}

function getCastInfo(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5a4c89ffe5846030bcf4fa2ac8aedb51&language=en-US`
  );
}

function getReviewsInfo(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=5a4c89ffe5846030bcf4fa2ac8aedb51`
  );
}

export {
  getTrendingFilms,
  getFilmById,
  getFilmsByQuery,
  getCastInfo,
  getReviewsInfo,
};
