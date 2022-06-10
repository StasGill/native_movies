import axios from "axios";

const key = "2a235b91059bbee0cb0dad81130d7beb";
const address = "https://api.themoviedb.org/3/";

const API = axios.create({ baseURL: address });

export const fetchTrend = (page = 1) =>
  API.get(`trending/all/day?api_key=${key}&page=${page}&language=en`);

export const getMovieById = (id, type = "movie", params = "") =>
  API.get(`${type}/${id}${params}?api_key=${key}&language=en`);

export const getActorById = (id) =>
  API.get(`person/${id}?api_key=${key}&language=en`);

export const getActorByIdSocial = (id) =>
  API.get(`person/${id}/external_ids?api_key=${key}&language=en`);

export const getActorByIdMovie = (id) =>
  API.get(`person/${id}/movie_credits?api_key=${key}&language=en`);

export const getCastById = (id, type = "movie") =>
  API.get(`${type}/${id}/credits?api_key=${key}&language=en`);

export const getSearchById = (query) =>
  API.get(
    `search/movie?api_key=${key}&language=en&include_adult=false&query=${query}`
  );

export const findMovie = (query, type = "movie", page = 1) => {
  const response = axios.get(
    `${address}search/${type}?api_key=${key}&language=en&page=${page}&include_adult=false&query=${query}`
  );
  return response;
};
