import React, { useState, useEffect } from 'react';

function TimerComponent(){
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else{
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isActive]);

  function toggleTimer(){
    setIsActive(!isActive);
  };

  return (
    <div className='d-flex justify-content-center pt-5'>
      <div className='border p-3 text-center'>
        <h1 className='border p-1'>{seconds} seconds</h1>
        <button onClick={toggleTimer} className='btn btn-primary px-5' style={{backgroundColor:isActive ? 'red' : 'green'}}>{isActive ? 'Stop' : 'Start'}</button>
      </div>
    </div>
  );
};

export default TimerComponent;