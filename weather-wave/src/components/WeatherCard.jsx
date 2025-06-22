export default function WeatherCard({ data, onAddFavorite, onRemoveFavorite }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="mt-6 border p-4 rounded-md bg-white shadow">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl font-bold">{data.name}</h3>
        <img src={iconUrl} alt="weather icon" className="w-16 h-16" />
        <p className="text-lg">🌡 {data.main.temp}°C</p>
        <p className="capitalize text-gray-600">
          🌥 {data.weather[0].description}
        </p>
      </div>

      <div className="mt-4 flex justify-center gap-3">
        {onAddFavorite && (
          <button
            onClick={onAddFavorite}
            className="px-4 py-2 bg-green-600 text-white rounded-md"
          >
            Add to Favorites
          </button>
        )}
        {onRemoveFavorite && (
          <button
            onClick={onRemoveFavorite}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
