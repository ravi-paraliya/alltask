import React, { useEffect, useState } from 'react'

function CountDown() {
    const [seconds, setSeconds] = useState(10);
    const [isActive, setIsActive] = useState(false); 

    useEffect(() => {
        let timer;
        if (isActive && seconds > 0) {
            timer = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (seconds <= 0) {
            setIsActive(false);
        }

        return () => clearInterval(timer);
    }, [isActive,seconds]);

    function handleStart(){
        setIsActive(true); 
    };

  return (
    <div>
            <div className='d-flex justify-content-center pt-5'>
                <div className='border p-3 text-center'>
                    <h1 className='border p-1'>Countdown: {seconds}</h1>
                    <button className='btn btn-primary px-5 border-black' onClick={handleStart}>Countdown</button>
                </div>
            </div>
    </div>
  )
}

export default CountDown
