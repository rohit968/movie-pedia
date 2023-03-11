import axios from '../axios'
import requests from '../requests'

export const fetchMovies = async () => {
  const request = await axios.get(requests.fetchTrending);
  return request.data.results;
}

export const upcoming = async () => {
  const request = await axios.get(requests.fetchUpcoming);
  return request.data.results;
}

export const fetchTopRated = async () => {
  const request = await axios.get(requests.fetchTopRated);
  return request.data.results;
}

export const fetchPopular = async () => {
  const request = await axios.get(requests.fetchPopular);
  return request.data.results;
}


