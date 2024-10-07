import React, { useEffect, useState } from 'react';

function PollingData() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
                .then((res) => res.json())
                .then((res) => {
                    if (res.drinks) {
                        setDrinks(res.drinks);
                    } else {
                        setDrinks([]);
                    }
                })
                .catch((err) => console.log(err));
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {drinks.map((item, index) => (
                <div className="card" style={{ width: '18rem' }} key={index}>
                    <img src={item.strDrinkThumb} className="card-img-top" alt={item.strDrink} />
                    <div className="card-body">
                        <h5 className="card-title">{item.strDrink}</h5>
                        <p className="card-text">{item.strInstructions}</p>
                        <a href="#" className="btn btn-primary">Order Now</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PollingData;
