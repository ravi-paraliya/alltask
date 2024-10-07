import React, { useEffect, useState,} from 'react';

function SwitcherLocalStorage() {

    const [darkMode, setDarkMode] = useState(() => {
    });
    
    useEffect(() => {
        const theme = darkMode ? 'dark' : 'light';
        document.body.className = theme;
        localStorage.setItem('theme', theme);
      }, [darkMode]);
    
      function togglebtn(){
        setDarkMode(prevMode => !prevMode);
      };
    
  return (
    <div>
    <div className='constiner d-flex justify-content-center'>
      <div className='text-center'>
         <h1 className=''>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
         <button onClick={togglebtn} className='btn btn-primary'>
           Switch to {darkMode ? 'Light' : 'Dark'} Mode
         </button>
      </div>
    </div>
    </div>
  )
}

export default SwitcherLocalStorage
