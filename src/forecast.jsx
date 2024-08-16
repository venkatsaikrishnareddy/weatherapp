import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div className="w-full max-w-sm mx-auto m-6">
      <h2 className="text-2xl font-bold mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-1 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="w-full border rounded-lg shadow-lg p-5 bg-slate-500"
          >
            <p className="text-lg font-bold">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </p>
            <p className="text-lg">{day.weather[0].description}</p>
            <p className="text-lg">Temp: {Math.round(day.temp.day)}°C</p>
            <img
              className="mx-auto w-20 h-20 mt-2 box-border bg-slate-500"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="weather icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
