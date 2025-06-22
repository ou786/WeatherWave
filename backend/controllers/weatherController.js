import {
  fetchCurrentWeather,
  fetchForecast
} from '../services/openWeatherservice.js';

import favorites from '../data/favorites.js';

export const getCurrentWeather = async (req, res) => {
  try {
    const data = await fetchCurrentWeather(req.params.city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch current weather' });
  }
};

export const getForecast = async (req, res) => {
  try {
    const data = await fetchForecast(req.params.city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch forecast' });
  }
};

export const addFavorite = (req, res) => {
  const { city } = req.body;
  if (!city) return res.status(400).json({ error: 'City is required' });

  if (!favorites.includes(city.toLowerCase())) {
    favorites.push(city.toLowerCase());
  }

  res.status(201).json({ message: 'City added to favorites', favorites });
};

export const getFavorites = async (req, res) => {
  try {
    const results = await Promise.all(
      favorites.map(city => fetchCurrentWeather(city))
    );
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
};

export const removeFavorite = (req, res) => {
  const cityToRemove = req.params.city.toLowerCase();
  const index = favorites.indexOf(cityToRemove);

  if (index > -1) {
    favorites.splice(index, 1);
    res.json({ message: 'Removed from favorites', favorites });
  } else {
    res.status(404).json({ error: 'City not in favorites' });
  }
};

