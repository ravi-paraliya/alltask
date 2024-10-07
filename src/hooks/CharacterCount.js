import React, { useState } from 'react'

function CharacterCount() {
    const [character,setCharacter] = useState('')


  return (
    <div className='d-flex justify-content-center'>
      <div>
          <h1>Character Counter</h1>
          <input type="text" value={character} onChange={(e) => setCharacter(e.target.value)} placeholder='Enter Text'/>
          <p className='text-bold'>Character length: {character.length}</p>
      </div>
    </div>
  )
}

export default CharacterCount
