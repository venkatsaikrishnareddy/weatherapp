import React from "react";
s;
const WeatherCard = ({ data }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-sm mx-auto">
      {data ? (
        <div>
          <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
          <p className="text-lg">{data.weather[0].description}</p>
          <p className="text-lg">
            Temperature: {Math.round(data.main.temp - 273.15)}°C
          </p>
          <p className="text-lg">Humidity: {data.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {data.wind.speed} m/s</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default weather;
