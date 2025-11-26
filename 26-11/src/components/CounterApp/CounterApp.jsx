import { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  const isEven = count % 2 === 0;
  const parityText = isEven ? "even" : "odd";

  let status, color;
  if (count > 0) {
    status = "positive";
    color = "green";
  } else if (count < 0) {
    status = "negative";
    color = "red";
  } else {
    status = "zero";
    color = "grey";
  }

  return (
    <div className="counter-app">
      <h1> Counter App</h1>
      <h2>{count}</h2>
      <div style={{ color: color }}>{status}</div>
      <div style={{ color: isEven ? "blue" : "orange" }}>{parityText}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default CounterApp;
