import React, { useEffect, useState } from 'react'

function FetchData() {
  const [drinks,setDrinks] = useState([])
 
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((res) => res.json())
    .then((res) => setDrinks(res.drinks))
    .catch((err) => console.log(err))
  },[])


  console.log(drinks);
  return (
    <div>
    {drinks.map((item,index) => {
      return(
        <div className="card" style={{width: '18rem'}}>
        <img src={item.strDrinkThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.strDrink}</h5>
          <p className="card-text">{item.strInstructions}</p>
          <a href="#" className="btn btn-primary">Order Now</a>
        </div>
      </div>
      )
    })}
    </div>
  )
}

export default FetchData
