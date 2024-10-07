import React, { useEffect, useState } from 'react'

function WindowWidth() {

    const [screenWidth,setScreenWidth] = useState(window.innerWidth,window.innerHeight)

    function handleResize(){
        setScreenWidth({    
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div>
      <h1>Width: {screenWidth.width}px</h1>
      <h1>Height: {screenWidth.height}px</h1>
    </div>
  )
}

export default WindowWidth
