import { useEffect, useState } from 'react';
import { getFavorites, removeFavorite } from '../api';
import WeatherCard from '../components/WeatherCard';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  // ✅ 1. Define the remove handler
  const handleRemove = async (cityName) => {
    try {
      await removeFavorite(cityName);
      setFavorites((prev) => prev.filter((c) => c.name !== cityName));
    } catch (err) {
      alert('Failed to remove favorite');
    }
  };

  // ✅ 2. Fetch favorites on page load
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await getFavorites();
        setFavorites(res.data);
      } catch (err) {
        setError('Failed to load favorites');
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 dark:text-white">
      <h2 className="text-2xl font-semibold mb-4">⭐ Favorite Cities</h2>

      {error && <p className="text-red-500">{error}</p>}

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites added yet.</p>
      ) : (
        <div className="grid gap-4">
          {favorites.map((city, index) => (
            <WeatherCard
              key={index}
              data={city}
              onRemoveFavorite={() => handleRemove(city.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
