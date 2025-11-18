import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white"
  };

  const dangerButton = {
    ...buttonStyle,
    backgroundColor: "#f44336"
  };

  const resetButton = {
    ...buttonStyle,
    backgroundColor: "#2196F3"
  };

  return (
   
    <div className="box" style={{ textAlign: "center", marginTop: "80px" }}>
      <h1 style={{ color: "#333" }}>Counter App</h1>

      <h2 style={{ fontSize: "28px" }}>Count: {count}</h2>

      <div className ="box2" style ={{ display:"flex", gap:"50px", justifyContent: "center" }}>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>+</button>

        <button style={dangerButton} onClick={() => setCount(count - 1)}>-</button>

        <button style={resetButton} onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
    
  );
}

export default App;
