import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.OPENWEATHER_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city) => {
  const res = await axios.get(`${baseUrl}/weather`, {
    params: {
      q: city,
      appid: apiKey,
      units: 'metric'
    }
  });
  return res.data;
};

export const fetchForecast = async (city) => {
  const res = await axios.get(`${baseUrl}/forecast`, {
    params: {
      q: city,
      appid: apiKey,
      units: 'metric'
    }
  });
  return res.data;
};
