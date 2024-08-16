import React, { useState, useEffect } from "react";
import Input from "./input";
import Forecast from "./forecast";
import { ImSpinner10 } from "react-icons/im";
import "./index.css";

function App() {
  const [data, setData] = useState(null);
  const [newCityName, setNewCityName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [forecast, setForecast] = useState(null);
  const handleChange = async (newCityName) => {
    setNewCityName(newCityName);
    setLoading(true);
    setShowSpinner(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${newCityName}&appid=2e68cb4f50b9606cff80f5abc5b56351&units=metric`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleChange(" ");
  }, []);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setShowSpinner(false);
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [loading]);

  return (
    <div className="w-full h-screen bg-gradientbg flex flex-col items-center justify-center px-4 lg:px-0">
      <div className="avatar">
        <div className="w-24 rounded-full m-4">
          <img src="data:image/jpeg;base64,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" />
        </div>
      </div>

      <Input className="mb-4" onCityNameChange={handleChange} />
      {loading && showSpinner ? (
        <div className="flex items-center justify-center h-screen">
          <ImSpinner10 className="animate-spin delay-1000 h-10 w-10 text-center" />
        </div>
      ) : (
        <div>
          <form className="w-full max-w-sm mx-auto m-6 ">
            {data ? (
              <div className="w-full border rounded-lg shadow-lg p-5 bg-slate-500">
                <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
                <p className="text-lg font-semibold mb-2">
                  {data.weather[0].description}
                </p>
                <p className="text-lg font-bold bg-slate-500">
                  Temperature: {Math.round(data.main.temp)}°C
                </p>
                <p className="text-lg">Humidity: {data.main.humidity}%</p>
                <p className="text-lg">Pressure: {data.main.pressure}</p>
                <p className="text-lg">Wind Speed: {data.wind.speed} m/s</p>
                <img
                  className="mx-auto w-20 h-20 mt-2 box-border bg-slate-500"
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt="weather icon"
                />
              </div>
            ) : (
              <p className="text-center last:font-bold bg-slate-600">
                No data available, please enter a valid city name
              </p>
            )}
          </form>
          {forecast && <Forecast forecast={forecast} />}
        </div>
      )}
    </div>
  );
}

export default App;
