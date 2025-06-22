import { useState } from 'react';
import { getCurrentWeather, getForecast, addFavorite } from '../api';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';

export default function Home() {
  const [city, setCity] = useState('');
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const trimmedCity = city.trim();
    if (!trimmedCity) return;

    setLoading(true);
    try {
      const [currentRes, forecastRes] = await Promise.all([
        getCurrentWeather(trimmedCity),
        getForecast(trimmedCity),
      ]);
      setCurrent(currentRes.data);
      setForecast(forecastRes.data.list.slice(0, 5));
      setError('');
    } catch (err) {
      setCurrent(null);
      setForecast([]);
      setError('City not found or API error');
    } finally {
      setLoading(false);
    }
  };

  const handleAddFavorite = async () => {
    try {
      await addFavorite(city);
      alert(`${city} added to favorites!`);
    } catch (err) {
      alert('Failed to add favorite');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-white p-4">
      <div className="max-w-xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">
          🌤️ WeatherWave
        </h2>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 px-3 py-2 border rounded-md"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>

        {loading && (
          <div className="mt-4 text-center">
            <span className="animate-spin text-3xl">🔄</span>
          </div>
        )}

        {error && !loading && (
          <p className="text-red-500 mt-2 text-center">{error}</p>
        )}

        {/* Empty state content */}
        {!current && !loading && !error && (
          <div className="text-center mt-16 text-gray-600">
            <div className="text-6xl mb-4">⛅</div>
            <p className="text-xl font-semibold">Welcome to WeatherWave</p>
            <p className="text-sm mt-1">
              Start by entering a city to see current weather and forecast.
            </p>
            <p className="text-sm">Add cities you love to your favorites 💙</p>
          </div>
        )}

        {!loading && current && (
          <WeatherCard data={current} onAddFavorite={handleAddFavorite} />
        )}

        {!loading && forecast.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-center">🔮 5-Day Forecast</h4>
            <div className="grid grid-cols-2 gap-4">
              {forecast.map((item, index) => (
                <ForecastCard key={index} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Optional footer */}
        <footer className="text-center text-sm text-gray-400 mt-16">
          Built with ❤️ by Osama • Powered by OpenWeatherMap
        </footer>
      </div>
    </div>
  );
}
