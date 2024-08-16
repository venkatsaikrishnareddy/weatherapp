import React, { useState } from "react";

const Input = ({ onCityNameChange }) => {
  const [cityName, setCityName] = useState("");

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onCityNameChange(cityName);
    }
  };

  return (
    <div>
      <label className="input input-bordered bg-transparent flex items-center gap-2 p-2 bg-gray-100 rounded-lg shadow-sm">
        <input
          type="text text-yellow-500 "
          className="grow w-full bg-transparent focus:outline-none "
          placeholder="Search city"
          value={cityName}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-5 w-5 text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default Input;
