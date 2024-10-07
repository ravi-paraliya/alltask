import React, { useState } from 'react'

function Number() {

const [number,setNumber] = useState(0)

  return (
    <div>
         <h1>Number:{number}</h1>
          <button onClick={() => setNumber(number +1)} className='mx-2 px-2 btn btn-success'>Increment</button>
          <button onClick={() => setNumber(number -1)} className='mx-2 px-2 btn btn-danger'>Decrement</button>
    </div>
  )
}

export default Number
