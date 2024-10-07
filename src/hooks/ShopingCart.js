import React, { useState } from 'react'

function ShopingCart() {

const [quantity,setQuantity] = useState(1)
const [quantity1,setQuantity1] = useState(3)
const [quantity2,setQuantity2] = useState(0)

  return (
    <div>
                <div className='d-flex aling-items-center justify-content-center py-2'>
                   <h5>Product 1 : {quantity}</h5>
                   <button onClick={() => setQuantity(quantity + 1)} disabled={quantity >= 8} className='mx-2 px-2 btn btn-success'>quantity +</button>
                   <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1} className='mx-2 px-2 btn btn-danger'>quantity -</button>
                </div>
                <div className='d-flex aling-items-center justify-content-center py-2'>
                   <h5>Product 2 : {quantity1}</h5>
                   <button onClick={() => setQuantity1(quantity1 + 1)} disabled={quantity1 >= 15} className='mx-2 px-2 btn btn-success'>quantity +</button>
                   <button onClick={() => setQuantity1(quantity1 - 1)} disabled={quantity1 <= 3} className='mx-2 px-2 btn btn-danger'>quantity -</button>
                </div>
                <div className='d-flex aling-items-center justify-content-center py-2'>
                   <h5>Product 3 : {quantity2}</h5>
                   <button onClick={() => setQuantity2(quantity2 + 1)} disabled={quantity2 >= 5} className='mx-2 px-2 btn btn-success'>quantity +</button>
                   <button onClick={() => setQuantity2(quantity2 - 1)} disabled={quantity2 <= 2} className='mx-2 px-2 btn btn-danger'>quantity -</button>
                </div>
          <h1 className='d-flex aling-items-center justify-content-center py-2'>Total Quantity = {quantity + quantity1 + quantity2}</h1>
    </div>
  )
}

export default ShopingCart
