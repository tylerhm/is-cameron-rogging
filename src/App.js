import React, { useState, useEffect } from 'react';
import './App.css';

const win = Math.floor(Math.random() * 100);

const COLORS = [
  "white",
  "red",
  "orange",
  "green",
  "blue",
  "purple",
];

function App() {
  const [color, setColor] = useState(0);

  useEffect(() => {
    if (win > 90)
      setTimeout(() => {
        setColor((color + 1) % COLORS.length)
      }, 500);
  }, [color]);

  return (
    <div className="App" style={{backgroundColor: COLORS[color]}}>
      <div>
        { win <= 90 ? "yes" : "no" }
      </div>
    </div>
  );
}

export default App;
