# 🌤️ WeatherWave

A full-stack weather application built with React and Node.js that allows users to search real-time weather and forecasts for any city, and save their favorite cities for quick access.

[Live Demo →](https://weather-wave-ten.vercel.app/)

---

## 🚀 Features

- 🔍 Search current weather and 5-day forecast for any city
- 💙 Add cities to favorites and view them anytime
- ✔️ Responsive UI with Tailwind CSS
- ☁️ Backend powered by OpenWeatherMap API
- 🧠 Smart error handling and user feedback

---

## 🛠️ Tech Stack

**Frontend:**  
- React (Vite)
- Tailwind CSS
- Axios
- React Router

**Backend:**  
- Node.js
- Express
- OpenWeatherMap API

---

## 🔗 Live Links

- **Frontend:** [weather-wave-ten.vercel.app](https://weather-wave-ten.vercel.app/)
- **Backend API:** [weatherwave-backend.onrender.com](https://weatherwave-backend.onrender.com/weather)

---

## 📦 How to Run Locally

**1. Clone the Repo**

```bash
git clone https://github.com/ou786/WeatherWave.git
cd WeatherWave

**2. Run Backend**
cd backend
npm install

**Create a .env file in /backend and add:**
OPENWEATHER_API_KEY=199330898134e0a0b01ce0fb2b090d71
PORT=5000

**Start at the Backend:**
node app.js

**3.Run Frontend**
cd weather-wave
npm install
npm run dev

**API Endpoints (Backend)**
GET /weather/current/:city
Get current weather by city name.

GET /weather/forecast/:city
Get 5-day forecast by city name.

POST /weather/favorites
Add a city to favorites (send JSON body with { "city": "CityName" }).

GET /weather/favorites
Get all favorite cities with their current weather.

DELETE /weather/favorites/:city
Remove a city from favorites.
