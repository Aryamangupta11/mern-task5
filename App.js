import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import "./index.css";
const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(0);
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    setAge(ageInYears);
  };
  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      <p>Your are {age} years old.</p>
    </div>
  );
};
export default AgeCalculator;
