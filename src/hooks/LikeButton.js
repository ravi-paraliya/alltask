import React, { useState } from 'react'

function LikeButton() {
    const [like,setLike] = useState(0)

function handleClick() {
    setLike(like + 1)
}
  return (
    <div className='d-flex justify-content-center pt-5'>
      <div className='border p-3 text-center'>
         <h2>{like} {like === 1 ? 'Like' : "Likes"}</h2>
         <button className='btn btn-primary' onClick={handleClick}>Like</button>
      </div>
    </div>
  )
}

export default LikeButton
