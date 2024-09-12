import "./App.scss";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const [status, setStatus] = useState(true);

  const changeColor = () => {
    setColor(prevColor => (prevColor === "red" ? "blue" : "red"));
  };

  const changeStatus = () => {
    setStatus(prevStatus => !prevStatus);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button className="mr-4" onClick={changeColor}>Change Color</button>
      <button className="mr-4" onClick={changeStatus}>Change Status</button>
      {status && <div className={`box ${color}`}></div>}
    </div>
  );
}

export default App;

