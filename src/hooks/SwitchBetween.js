import React, { useEffect, useState,} from 'react';

function SwitchBetween() {
const [darkMode, setDarkMode] = useState(() => {
});

useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.body.className = theme;
  }, [darkMode]);

  function togglebtn(){
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='constiner d-flex justify-content-center'>
      <div className='text-center'>
         <h1 className=''>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
         <button onClick={togglebtn} className='btn btn-primary'>
           Switch to {darkMode ? 'Light' : 'Dark'} Mode
         </button>
      </div>
    </div>
  )
}

export default SwitchBetween
