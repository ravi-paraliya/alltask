import React, { useEffect, useState } from 'react'

function CreateTimer() {

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
    }, [isActive,seconds]);
  
    function toggleTimer(){
      setIsActive(!isActive);
    };

  return (
    <div>
        <div className='d-flex justify-content-center pt-5'>
          <div className='border p-3 text-center'>
            <h1 className='border p-1'>{seconds} Timer</h1>
            <button onClick={toggleTimer} className='btn btn-primary px-5 border-black' style={{backgroundColor:isActive ? 'red' : 'green'}}>{isActive ? 'Stop' : 'Start'}</button>
          </div>
        </div>
    </div>
  )
}

export default CreateTimer
