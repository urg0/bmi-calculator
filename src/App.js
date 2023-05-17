import React, { useState } from "react";

import "./index.css";

function App() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const weightChangeHandler = (event) => {
    setWeight(event.target.value);
  };
  const heightChangeHandler = (event) => {
    setHeight(event.target.value);
  };

  const underweight =
    "https://c8.alamy.com/zooms/9/4c8a26f419dc4dfda6cfe5bd5e562b29/pbaj4w.jpg";

  const healthy =
    "https://c8.alamy.com/zooms/9/9c396fcee30b48429dc263edc9aa11de/pbaj4t.jpg";

  const overweight =
    "https://thumbs.dreamstime.com/b/fat-cartoon-character-boy-overweight-isolated-vector-illustration-white-background-79246855.jpg";

  const obese =
    "https://cdn.yemek.com/mnresize/940/940/uploads/2018/04/dr-nowzaradan-kimdir.jpg";
  const calcBmi = (w, h) => {
    return (w / (h * h)) * 10000;
  };
  const result = calcBmi(weight, height).toFixed(2);
  let status;
  if (result < 18.5) {
    status =
      "https://c8.alamy.com/zooms/9/4c8a26f419dc4dfda6cfe5bd5e562b29/pbaj4w.jpg";
  } else if (result > 18.5 && result < 25) {
    status =
      "https://c8.alamy.com/zooms/9/9c396fcee30b48429dc263edc9aa11de/pbaj4t.jpg";
  } else if (result >= 25 && result < 30) {
    status =
      "https://thumbs.dreamstime.com/b/fat-cartoon-character-boy-overweight-isolated-vector-illustration-white-background-79246855.jpg";
  } else {
    status =
      "https://cdn.yemek.com/mnresize/940/940/uploads/2018/04/dr-nowzaradan-kimdir.jpg";
  }

  return (
    <div className="container">
      <div>
        <label htmlFor="range">Your weight (kg):</label>
        <input
          onChange={weightChangeHandler}
          type="range"
          value={weight}
          min="1"
          max="100"
        />
        <div className="number">{weight}</div>
      </div>
      <div>
        <label>Your height (cm):</label>
        <input
          onChange={heightChangeHandler}
          type="range"
          min="100"
          max="210"
          value={height}
        />
        <div className="number">{height}</div>
      </div>
      <div>Your BMI: {result}</div>
      <div>
        <img className="img" src={status} alt="result" />
      </div>
    </div>
  );
}

export default App;
