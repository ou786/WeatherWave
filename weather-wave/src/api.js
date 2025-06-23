import axios from 'axios';

const API = axios.create({
  baseURL: 'https://weatherwave-backend.onrender.com/weather', // backend base URL
});

// Current weather by city
export const getCurrentWeather = (city) => API.get(`/current/${city}`);

// 5-day forecast by city
export const getForecast = (city) => API.get(`/forecast/${city}`);

// Add city to favorites
export const addFavorite = (city) => API.post(`/favorites`, { city });

// Get all favorites
export const getFavorites = () => API.get(`/favorites`);

export const removeFavorite = (city) => API.delete(`/favorites/${city}`);

