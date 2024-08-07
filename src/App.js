// import React, { useState, useRef } from 'react';
// import './App.css';

// function Stopwatch() {
//   const [isRunning, setIsRunning] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const intervalRef = useRef(null);

//   const handleStart = () => {
//     if (!isRunning) {
//       const startTime = Date.now() - elapsedTime;
//       intervalRef.current = setInterval(() => {
//         setElapsedTime(Date.now() - startTime);
//       }, 10);
//       setIsRunning(true);
//     }
//   };

//   const handleStop = () => {
//     if (isRunning) {
//       clearInterval(intervalRef.current);
//       setIsRunning(false);
//     }
//   };

//   const handleReset = () => {
//     clearInterval(intervalRef.current);
//     setIsRunning(false);
//     setElapsedTime(0);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60000).toString().padStart(2, '0');
//     const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
//     const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
//     return `${minutes}:${seconds}.${milliseconds}`;
    
//   };
  

//   return (
//     <div className="stopwatch">
//       <h1>Stopwatch</h1>
//       <div className="display">
//         {formatTime(elapsedTime)}
//       </div>
//       <div className="buttons">
//         <button onClick={handleStart} disabled={isRunning}>Start</button>
//         <button onClick={handleStop} disabled={!isRunning}>Stop</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
  
// }

// function App() {
//   return (
//     <div className="App">
//       <Stopwatch />

      
//     </div>
//   );
// }

// export default App;


import React, { useState, useRef } from 'react';
import './App.css';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="display">
        {formatTime(elapsedTime)}
      </div>
      <div className="buttons">
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;

