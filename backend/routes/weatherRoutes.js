import express from 'express';
import {
  getCurrentWeather,
  getForecast,
  addFavorite,
  getFavorites,
  removeFavorite
} from '../controllers/weatherController.js';

const router = express.Router();

router.get('/current/:city', getCurrentWeather);
router.get('/forecast/:city', getForecast);
router.post('/favorites', addFavorite);
router.get('/favorites', getFavorites);
router.delete('/favorites/:city', removeFavorite);

export default router;
