export default function ForecastCard({ item }) {
  return (
    <div className="p-3 border rounded bg-white shadow-sm">
      <p>{new Date(item.dt_txt).toLocaleString()}</p>
      <p>Temp: {item.main.temp}°C</p>
      <p>{item.weather[0].main}</p>
    </div>
  );
}
