import React, { useEffect, useState } from 'react'

function OnlineStatus() {
    const [onlineStatus,setOnlineStatus] = useState(navigator.onLine)

    useEffect(() => {
          function updateStatus(){
            setOnlineStatus(navigator.offLine)
          }

          window.addEventListener('online',updateStatus)
          window.addEventListener('offline',updateStatus)

          return() => {
            window.removeEventListener('online',updateStatus)
            window.removeEventListener('offline',updateStatus)
          }
    },[])
  return (
    <div className='d-flex justify-content-center pt-5'>
       <div>
            <h1>User is currently {onlineStatus ? 'Online' : 'Offline'}</h1>
            <h5 style={{ padding: '10px',border:"1px solid black",textAlign:"center"}}>
                {onlineStatus ? 'You have a stable internet connection.' : 'You are not connected to the internet.'}
            </h5>
        </div>
    </div>
  )
}

export default OnlineStatus
