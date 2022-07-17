import './App.css';
import React, {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime,setCtime] = useState(time);
  const UpdateTime = () =>{
    let time = new Date().toLocaleTimeString();
    setCtime(time);

  }

  setInterval(UpdateTime,1000)
  return (
    <div className="wrapper">
      <div className="display">
        <div id="time">
          <h2>Digital Clock </h2>
          <h1>{ctime}</h1>
        </div>
      </div>
      <span></span>
      <span></span>

      {/* <button onClick={UpdateTime}>get time</button> */}
    </div>
  );
}

export default App;
